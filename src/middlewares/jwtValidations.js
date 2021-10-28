const JWT = require('jsonwebtoken');

const SECRET = 'mysecretpassword';

const validateJWTToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }

  try {
    const payload = JWT.verify(token, SECRET);
    req.user = payload; 
        
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' }); 
  }  
};

module.exports = {
  validateJWTToken,
};
