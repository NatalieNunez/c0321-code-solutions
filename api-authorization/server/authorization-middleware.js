const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  const authToken = req.headers['x-access-token'];
  if (!authToken) {
    throw new ClientError(401, 'authentication required');
  }
  const payload = jwt.verify(authToken, process.env.TOKEN_SECRET);
  req.user = payload;
  next();
}

module.exports = authorizationMiddleware;
