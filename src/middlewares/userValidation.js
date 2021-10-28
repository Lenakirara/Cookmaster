const userModels = require('../models/userModels');

const validateUserField = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }

  next();
};

const validateUserEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegx = /\S+@\S+\.\S+/;
  if (!emailRegx.test(email)) {
    return res.status(400).json({ message: 'Invalid entries. Try again.' });
  }
  
  next();
};

const validateEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await userModels.emailExist(email);
  if (userEmail) {
    return res.status(409).json({ message: 'Email already registered' });
  }
  
  next();
};

module.exports = {
  validateUserField,
  validateUserEmail,
  validateEmailExist,
};
