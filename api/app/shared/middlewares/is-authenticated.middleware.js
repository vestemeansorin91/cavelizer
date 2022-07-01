const passport = require("passport");
const isAuthenticatedMiddleware = passport.authenticate('jwt', {session: false});

module.exports = isAuthenticatedMiddleware;
