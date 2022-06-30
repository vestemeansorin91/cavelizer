const usersCollection = require('../../user.schema');
const { getById } = require('../../../../shared/helpers/user.helpers');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  updateHrInformation(request, response, next) {
    const userId = request.params.userId;
    updateHrInformationFn(userId, request.body)
      .then(newUser => {
        response.write(JSON.stringify(newUser));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function updateHrInformationFn(userId, hrInformationProps) {
  const userFound = await getById(userId, usersCollection, 'User');

  return usersCollection.findByIdAndUpdate(
    userId,
    {
      profile: {
        hrInformation: hrInformationProps
      }
    },
    {
      new: true
    }
  );
}
