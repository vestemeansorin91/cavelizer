/* Only admin middle */
const HttpStatus = require('http-status-codes');
const jwtDecode = require('jwt-decode');

const IsAdminMiddleware = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (token) {
        const decodedToken = jwtDecode(token.substring(7));

        if(decodedToken.isAdmin) {
            next();
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({mesasge: 'User is not an admin'});
        }
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({mesasge: 'No token provided'});
    }
};

module.exports = IsAdminMiddleware;
