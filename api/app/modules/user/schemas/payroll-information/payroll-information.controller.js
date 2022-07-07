const usersCollection = require('../../user.schema');
const { getById } = require('../../../../shared/helpers/user.helpers');
const { StatusCodes } = require('http-status-codes');

module.exports = {
  updatePayrollInformation(request, response) {
    const userId = request.params.userId;
    updatePayrollInformationFn(userId, request.body)
      .then(user => {
        response.write(JSON.stringify(user));
        response.end();
      })
      .catch(error => response.status(StatusCodes.BAD_REQUEST).send({ message: error.message }));
  }
};

async function updatePayrollInformationFn(userId, payrollInformationProps) {
  await getById(userId, usersCollection, 'User');

  return usersCollection.findByIdAndUpdate(userId, {
    'profile.payrollInformation': payrollInformationProps
  });
}
