const usersCollection = require('./user.schema');
const { getById } = require('../../shared/helpers/user.helpers');
const { StatusCodes } = require('http-status-codes');
const { generateToken } = require('../../shared/middlewares/passport/token-generator');

module.exports = {
  getUsers(request, response) {
    getUsersFn()
      .then(users => {
        response.write(JSON.stringify(users));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  getUserById(request, response) {
    const id = request.params.id;

    getById(id, usersCollection, 'User')
      .then(user => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  getUserByIdWithProfile(request, response) {
    const id = request.params.id;

    getUserByIdWithProfileFn(id)
      .then(user => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  getUserByUsername(request, response) {
    const { username } = request.params;
    getUserByUsernameFn(username)
      .then(user => {
        response.write(JSON.stringify({ user }));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  toggleUserActive(request, response) {
    const id = request.params.id;

    toggleUserActiveFn(id)
      .then(updatedUser => {
        response.write(JSON.stringify(updatedUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  deleteUser(request, response) {
    const id = request.params.id;

    deleteUserFn(id)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  },
  uploadAvatar(request, response) {
    const userId = request.params.id;
    const filePath = request.file.path;

    uploadAvatarFn(userId, filePath)
      .then(newUserUpdated => {
        response.write(JSON.stringify(newUserUpdated));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function getUsersFn() {
  return usersCollection.find();
}

async function getUserByIdWithProfileFn(id) {
  const userFound = await usersCollection.findById(id).select('+profile');

  if (!userFound) {
    throw new Error('User not found!');
  }

  return userFound.profile;
}

async function getUserByUsernameFn(username) {
  const userFound = await usersCollection.findOne({ username });

  if (!userFound) {
    throw new Error(`Couldn't find user by username`);
  }

  return userFound;
}

async function toggleUserActiveFn(id) {
  const userFound = await getById(id, usersCollection, 'User');

  return usersCollection.findByIdAndUpdate(
    id,
    {
      isActive: !userFound.isActive
    },
    {
      new: true
    }
  );
}

async function deleteUserFn(id) {
  await getById(id, usersCollection, 'User');

  return usersCollection.findByIdAndRemove(id);
}

async function uploadAvatarFn(userId, filePath) {
  const userFound = await getById(userId, usersCollection, 'User');

  await usersCollection.findByIdAndUpdate(
    userId,
    {
      avatarBlobUrl: filePath
    },
    { new: true }
  );

  const updatedUser = userFound.toObject();
  updatedUser.avatarBlobUrl = filePath;

  const accessToken = generateToken(updatedUser);
  return { accessToken };
}
