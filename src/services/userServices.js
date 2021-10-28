const userModels = require('../models/userModels');

const getUsers = async () => {
  const users = await userModels.getUsers();
  return users;
};

const createUser = async (name, email, password, role) => {
  const userCreated = await userModels.createUser(name, email, password, role);
  return userCreated;
};

const emailLoginCheck = async (email) => {
  const emailChecked = await userModels.emailExist(email);
  if (!emailChecked) {
    return { code: 401, message: 'Incorrect username or password' };
  }
  return null;
};

const validateEmailLogin = (email) => {
  const emailRegx = /\S+@\S+\.\S+/;
  if (!email) {
    return { code: 401, message: 'All fields must be filled' };
  }
  if (!emailRegx.test(email)) {
    return { code: 401, message: 'Incorrect username or password' };
  }
  return null;
};

const passwordLoginCheck = async (email, senha) => {
  const { password } = await userModels.emailExist(email);
  if (senha !== password) {
    return { code: 401, message: 'Incorrect username or password' };
  }
  return null;
};

const validatePasswordLogin = (senha) => {
  if (!senha) {
    return { code: 401, message: 'All fields must be filled' };
  }
  return null;
};

module.exports = {
  getUsers,
  createUser,
  emailLoginCheck,
  validateEmailLogin,
  passwordLoginCheck,
  validatePasswordLogin,
};
