const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if(!token){
    return res.json('The token was not available');
  }else{
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if(err){
        return res.json('The token is not valid');
      }else{
        req.user = decoded;
        next();
      }
    });
  }
}

module.exports = verifyUser;