/* Passport */
const passport = require('passport');
const { generateToken } = require('./token-generator');
const { StatusCodes } = require('http-status-codes');
const usersCollection = require('../user/user.schema');

module.exports = {
  register(request, response, next) {
    registerFn(request.body)
      .then(newUser => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  login(request, response, next) {
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

  if (userFound) {
    throw new Error('Username or Email already exists');
  }

  const newUser = new usersCollection(userProps);
  newUser.save();

  return newUser;
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
