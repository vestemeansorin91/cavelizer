const usersCollection = require('../../user.schema');
const { getById } = require('../../../../shared/helpers/user.helpers');

module.exports = {
  updatePersonalData(request, response) {
    const userId = request.params.userId;

    updatePersonalDataFn(userId, request.body)
      .then(newUser => {
        console.log(newUser);
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

async function updatePersonalDataFn(userId, personalDataProps) {
  const userFound = await getById(userId, usersCollection, 'User');

  return usersCollection.findByIdAndUpdate(
    userId,
    {
      profile: {
        personalData: personalDataProps
      }
    },
    {
      new: true
    }
  );
}
