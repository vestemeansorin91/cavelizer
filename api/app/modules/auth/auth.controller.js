/* Passport */
const passport = require("passport");
const { generateToken } = require("./token-generator");

const usersCollection = require("../user/user.schema");

module.exports = {
  register(request, response) {
    registerFn(request.body)
      .then((newUser) => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch((error) => {
        response.write(JSON.stringify({ error }));
        response.end();
      });
  },
  login(request, response) {
    loginFn(request.body)
      .then((newUser) => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch((error) => {
        response.write(JSON.stringify({ error }));
        response.end();
      });
  },
};

async function registerFn(userProps) {
  const userFound = await usersCollection.findOne({
    $or: [
      {
        username: userProps.username,
      },
      {
        email: userProps.email,
      },
    ],
  });

  if (userFound) {
    throw new Error("Username or Email already exists");
  }

  const newUser = new usersCollection(userProps);
  newUser.save();

  return newUser;
}

async function loginFn(userProps) {
  // {
  //   "username": "sorin",
  //   "password": "1234"
  // }

  const userWithCorrectCredentials = await usersCollection.findOne({
    username: userProps.username,
    password: userProps.password,
  });

  if (!userWithCorrectCredentials) {
    throw new Error("Username or Password incorrect!");
  }

  const accessToken = generateToken(userWithCorrectCredentials);

  return { accessToken };
}
