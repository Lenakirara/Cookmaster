const router = require('express').Router();

const {
  validateRecipe,
} = require('../middlewares/recipesValidations');

const {
  validateJWTToken,
} = require('../middlewares/jwtValidations');

const {
  getAllRecipes,
  findRecipeById,
  createRecipes,
} = require('../controllers/recipesControlers');

router.get('/:id', findRecipeById);
router.get('/', getAllRecipes);
router.post('/', validateJWTToken, validateRecipe, createRecipes);

module.exports = router;
