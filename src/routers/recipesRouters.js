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
  editRecipe,
  deleteRecipe,
} = require('../controllers/recipesControlers');

router.get('/:id', findRecipeById);
router.get('/', getAllRecipes);
router.post('/', validateJWTToken, validateRecipe, createRecipes);
router.put('/:id', validateJWTToken, editRecipe);
router.delete('/:id', validateJWTToken, deleteRecipe);

module.exports = router;
