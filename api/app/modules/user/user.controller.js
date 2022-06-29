const usersCollection = require("./user.schema");
const { getById } = require("../../shared/helpers/user.helpers");

module.exports = {
  getUsers(request, response, next) {
    getUsersFn()
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  getUserById(request, response, next) {
    const id = request.params.id;

    getById(id, usersCollection, "User")
      .then((user) => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  toggleUserActive(request, response, next) {
    const id = request.params.id;

    toggleUserActiveFn(id)
      .then((updatedUser) => {
        response.write(JSON.stringify(updatedUser));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
  deleteUser(request, response, next) {
    const id = request.params.id;

    deleteUserFn(id)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch((error) =>
        response
          .status(StatusCodes.BAD_REQUEST)
          .send({ message: error.message })
      );
  },
};

async function getUsersFn() {
  return usersCollection.find();
}

async function toggleUserActiveFn(id) {
  const userFound = await getById(id, usersCollection, "User");

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
  await getById(id, usersCollection, "User");

  return usersCollection.findByIdAndRemove(id);
}
