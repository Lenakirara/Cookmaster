const router = require('express').Router();

const {
  validateRecipe,
} = require('../middlewares/recipesValidations');

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  getAllRecipes,
  createRecipes,
} = require('../controllers/recipesControlers');

router.get('/', getAllRecipes);
router.post('/', validateJWTToken, validateRecipe, createRecipes);

module.exports = router;
