const userServices = require('../services/userServices');

const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userServices.createUser(name, email, password, role);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

module.exports = {
  getUsers,
  createUser,
};
