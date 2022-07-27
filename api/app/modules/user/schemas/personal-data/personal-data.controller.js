const usersCollection = require('../../user.schema');
const {getById} = require('../../../../shared/helpers/user.helpers');
const {StatusCodes} = require('http-status-codes');

module.exports = {
    updatePersonalData(request, response) {
        const userId = request.params.userId;

        updatePersonalDataFn(userId, request.body)
            .then(newUser => {
                response.write(JSON.stringify(newUser));
                response.end();
            })
            .catch(error => response.status(StatusCodes.BAD_REQUEST).send({message: error.message}));
    }
};

async function updatePersonalDataFn(userId, personalDataProps) {
    await getById(userId, usersCollection, 'User');

    return usersCollection.findByIdAndUpdate(
        userId,
        {
            'profile.personalData': personalDataProps
        },
        {
            new: true
        }
    );
}
