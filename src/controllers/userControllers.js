const jwt = require('jsonwebtoken');
const userServices = require('../services/userServices');

const SECRET = 'mysecretpassword';

const getUsers = async (req, res) => {
  try {
    const users = await userServices.getUsers();
    return res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Erro na requisição' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userServices.createUser(name, email, password, role);
    return res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: 'Erro na requisição' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLog = await userServices.loginUser(email, password);
    const jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: userLog }, SECRET, jwtConfig);
    return res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro na requisição' });
  }
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
};
