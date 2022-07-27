/* Only admin middle */
const HttpStatus = require('http-status-codes');
const jwtDecode = require('jwt-decode');

const IsAdminMiddleware = async (request, response, next) => {
    const token = request.headers['authorization'];

    if (token) {
        const decodedToken = jwtDecode(token.substring(7));

        // Check if token is valid

        if (decodedToken.isAdmin) {
            next();
        } else {
            response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({mesasge: 'User is not an admin'});
        }
    } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({mesasge: 'No token provided'});
    }
};

module.exports = IsAdminMiddleware;
