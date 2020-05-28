const jwt = require('jsonwebtoken');

module.exports = (request, response, next) => {
  try {
    // extract the token from the suthorization header. It is the second part of the JWT string
    const token = request.headers.authorization.split(' ')[1];

    // convert/decode the token to the random string which was used to create it
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');

    // extract the userId from the converted token
    const { userId } = decodedToken;

    // check if the userId in this auth route matches the one used to create the token
    if (request.body.userId && request.body.userId !== userId) {
      response.status(401).json({
        e: 'Illegal User',
      });
    } else {
      next();
    }
  } catch (error) {
    response.status(401).json({
      err: 'Invalid Request',
    });
  }
};
