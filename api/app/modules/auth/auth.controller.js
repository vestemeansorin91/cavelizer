const { generateToken } = require('../../shared/middlewares/passport/token-generator');
const { StatusCodes } = require('http-status-codes');
const usersCollection = require('../user/user.schema');
const joi = require('joi');
const bcrypt = require('bcrypt');

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

  const validateSchema = joi.object().keys({
    username: joi.string().min(5).max(25).required(),
    fullName: joi.string().min(5).required(),
    password: joi.string().min(4).required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required(),
    email: joi.string().email().required(),
    isActive: joi.optional(),
    isAdmin: joi.optional()
  });

  const { error } = validateSchema.validate(userProps);
  if (error && error.details) throw new Error(error.details[0].message);

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(userProps.password, salt);

  const newUser = {
    ...userProps,
    salt,
    password: hashedPassword
  };

  await new usersCollection(newUser).save();
  return userProps;
}

async function loginFn(userProps) {
  const { username, password } = userProps;
  await validateUserPassword(username, password);

  const userWithCorrectCredentials = await usersCollection.findOne({ username }).exec();

  if (!userWithCorrectCredentials) {
    throw new Error('Username or Password incorrect!');
  }

  const accessToken = generateToken(userWithCorrectCredentials.toObject());
  return { accessToken };
}

async function validateUserPassword(username, password) {
  const userFound = await usersCollection.findOne({ username }).select('+password');

  if (userFound && (await bcrypt.compare(password, userFound.password))) {
    return userFound;
  }

  throw new Error('Password or User wrong!');
}
