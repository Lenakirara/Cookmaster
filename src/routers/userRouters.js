const router = require('express').Router();

const {
  validateUserField,
  validateUserEmail,
  validateEmailExist,
} = require('../middlewares/userValidation');

const {
  getUsers,
  createUser,
} = require('../controllers/userControllers');

router.get('/', getUsers);
router.post('/', validateUserField, validateUserEmail, validateEmailExist, createUser);

module.exports = router;
