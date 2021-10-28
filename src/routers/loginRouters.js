const router = require('express').Router();

const {
  validateUserLogin,
} = require('../middlewares/loginValidation');

const { userLogin } = require('../controllers/loginControllers');

router.post('/', validateUserLogin, userLogin);

module.exports = router;
