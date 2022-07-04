const { generateToken } = require('../../shared/middlewares/passport/token-generator');
const { StatusCodes } = require('http-status-codes');
const usersCollection = require('../user/user.schema');
const joi = require('joi');

module.exports = {
  register(request, response) {
    registerFn(request.body)
      .then(newUser => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  login(request, response) {
    loginFn(request.body)
      .then(newUser => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function registerFn(userProps) {
  const userFound = await usersCollection.findOne({
    $or: [
      {
        username: userProps.username
      },
      {
        email: userProps.email
      }
    ]
  });

  if (userFound) throw new Error('Username or Email already exists');

  const GenderEnum = require('../../shared/enums/gender.enum');

  const validateSchema = joi.object().keys({
    username: joi.string().min(5).max(25).required(),
    fullName: joi.string().min(5).required(),
    password: joi.string().min(4).required(),
    email: joi.string().email().required(),
    isActive: joi.optional(),
    isAdmin: joi.optional(),
    gender: joi.string().valid(...Object.values(GenderEnum)),
  });

  const { error } = validateSchema.validate(userProps);
  if (error && error.details) throw new Error(error.details[0].message);

  return new usersCollection(userProps).save();
}

async function loginFn(userProps) {
  const userWithCorrectCredentials = await usersCollection
    .findOne({
      username: userProps.username,
      password: userProps.password
    })
    .exec();

  if (!userWithCorrectCredentials) {
    throw new Error('Username or Password incorrect!');
  }

  const accessToken = generateToken(userWithCorrectCredentials.toObject());
  return { accessToken };
}
