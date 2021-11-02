const router = require('express').Router();
const multer = require('multer');

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
  imageUpdate,
} = require('../controllers/recipesControlers');

router.get('/:id', findRecipeById);
router.get('/', getAllRecipes);
router.post('/', validateJWTToken, validateRecipe, createRecipes);
router.put('/:id', validateJWTToken, editRecipe);
router.delete('/:id', validateJWTToken, deleteRecipe);

const storage = multer.diskStorage({
  destination: 'src/uploads',
  filename: (req, _file, cb) => {
    const { id } = req.params;
    return cb(null, `${id}.jpeg`);
  },
});

const upload = multer({ storage });

router.put('/:id/image', upload.single('image'), validateJWTToken, imageUpdate);

module.exports = router;
