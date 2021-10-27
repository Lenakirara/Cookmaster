const router = require('express').Router();

const {
  validateUserLogin,
} = require('../middlewares/loginValidation');

const { loginUser } = require('../controllers/userControllers');

router.post('/', validateUserLogin, loginUser);

module.exports = router;
