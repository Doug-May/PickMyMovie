//This is for verifying the jwt token
module.exports = function (req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //Split at the space and get token
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        //set token and move on
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}