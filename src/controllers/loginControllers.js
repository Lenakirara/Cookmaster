const loginServices = require('../services/loginServices');

const userLogin = async (req, res) => {
  try {
    const { email } = req.body;
    const token = await loginServices.userLogin(email);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

module.exports = {
  userLogin,
};
