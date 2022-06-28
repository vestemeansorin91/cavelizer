const usersCollection = require("./user.schema");
const { getById } = require("../../shared/helpers/user.helpers");

module.exports = {
  getUsers(request, response) {
    getUsersFn()
      .then((users) => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  getUserById(request, response) {
    const id = request.params.id;

    getById(id, usersCollection, "User")
      .then((user) => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  toggleUserActive(request, response) {
    const id = request.params.id;

    toggleUserActiveFn(id)
      .then((updatedUser) => {
        response.write(JSON.stringify(updatedUser));
        response.end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  deleteUser(request, response) {
    const id = request.params.id;

    deleteUserFn(id)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch((error) => {
        throw new Error(error);
      });
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
  return usersCollection.findByIdAndRemove(id);
}
