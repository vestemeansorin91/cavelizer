const usersCollection = require("../../user.schema");
const { getById } = require("../../../../shared/helpers/user.helpers");

module.exports = {
  updatePublicProfile(request, response) {
    const userId = request.params.userId;

    updatePublicProfileFn(userId, request.body)
      .then(() => {
        response.write(JSON.stringify({}));
        response.end();
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};

async function updatePublicProfileFn(userId, publicProfileProps) {
  const userFound = await getById(userId, usersCollection, "User");
  console.log({ userFound });

  await usersCollection.findByIdAndUpdate(userId, {
    profile: {
      publicProfile: publicProfileProps,
    },
  });
  return null;
}
