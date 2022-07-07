const usersCollection = require('../../user.schema');
const { getById } = require('../../../../shared/helpers/user.helpers');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  updatePublicProfile(request, response) {
    const userId = request.params.userId;

    updatePublicProfileFn(userId, request.body)
      .then(updatedUser => {
        response.write(JSON.stringify(updatedUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function updatePublicProfileFn(userId, publicProfileProps) {
  await getById(userId, usersCollection, 'User');

  return usersCollection.findByIdAndUpdate(
    userId,
    {
      'profile.publicProfile': publicProfileProps
    },
    { new: true }
  );
}
