const usersCollection = require('../../user.schema');
const { getById } = require('../../../../shared/helpers/user.helpers');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  updatePublicProfile(request, response, next) {
    const userId = request.params.userId;

    updatePublicProfileFn(userId, request.body)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function updatePublicProfileFn(userId, publicProfileProps) {
  const userFound = await getById(userId, usersCollection, 'User');
  console.log({ userFound });

  await usersCollection.findByIdAndUpdate(userId, {
    profile: {
      publicProfile: publicProfileProps
    }
  });
  return null;
}
