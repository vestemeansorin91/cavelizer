const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const setUserOnRequestMiddleware = (request, response, next) => {
  const token = (request.cookies && request.cookies.auth) || request.headers.authorization.split(' ')[1];

  if (!token) {
    return response.status(StatusCodes.UNAUTHORIZED).json({ message: 'No authorization' });
  }

  if (!token) {
    return response.status(StatusCodes.FORBIDDEN).json({ message: 'No token provided' });
  }

  return jwt.verify(token, process.env.SECRET_KEY_JWT, (err, decoded) => {
    if (err) {
      if (err.expiredAt < new Date()) {
        return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Token has expired, Please log in again', token: null });
      }

      next();
    }
    request.user = decoded;
    next();
  });
};

module.exports = setUserOnRequestMiddleware;
