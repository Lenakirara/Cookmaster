const userServices = require('../services/userServices');

const validateUserLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const isValidEmail = await userServices.validateEmailLogin(email);
  if (isValidEmail) {
    return res.status(isValidEmail.code).json({ message: isValidEmail.message });
  }

  const isValidPassword = await userServices.validatePasswordLogin(password);
  if (isValidPassword) {
    return res.status(isValidPassword.code).json({ message: isValidPassword.message });
  }

  const emailChecked = await userServices.emailLoginCheck(email);
  if (emailChecked) {
    return res.status(emailChecked.code).json({ message: emailChecked.message });
  }

  const passwordChecked = await userServices.passwordLoginChecke(email, password);
  if (passwordChecked) {
    return res.status(passwordChecked.code).json({ message: passwordChecked.message });
  }
  next();
};

module.exports = {
  validateUserLogin,
};
