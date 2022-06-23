const { StatusCodes } = require("http-status-codes");
const usersCollection = require("./user.schema");

module.exports = {
  getUsers(request, response) {
    getUsersFn()
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((e) => response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR));
  },
  createUser(request, response) {
    createUserFn(request.body)
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((e) => response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR));
  },
  getUserById(request, response) {
    // CE PRIMESC DE LA INSOMNIA
    const id = request.params.id;

    // LOGICA
    getUserByIdFn(id)
      // CE RETURNEZ LA INSOMNIA
      .then((user) => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch((error) => response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR));
  },
  toggleUserActive(request, response) {
    const id = request.params.id;

    toggleUserActiveFn(id)
      .then((updatedUser) => {
        response.write(JSON.stringify(updatedUser));
        response.end();
      })
      .catch((error) => response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR));
  },
  deleteUser(request, response) {
    const id = request.params.id;

    deleteUserFn(id)
      .then((res) => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch((error) => {
        console.log(error);
        response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      });
  },
};

async function getUsersFn() {
  return usersCollection.find();
}

async function createUserFn(userProps) {
  return new usersCollection(userProps).save();
}

async function getUserByIdFn(id) {
  const userFound = await usersCollection.findById(id);

  if (!userFound) {
    throw new Error("User not found!");
  }

  return userFound;
}

async function toggleUserActiveFn(id) {
  const userFound = await getUserByIdFn(id);

  return usersCollection.findByIdAndUpdate(
    id,
    {
      isActive: !userFound.isActive,
    },
    {
      new: true,
    }
  );
}

async function deleteUserFn(id) {
  return usersCollection.findByIdAndRemove(id);
}
