const recipesServices = require('../services/recipesServices');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await recipesServices.getAllRecipes();
    return res.status(200).json(recipes);
  } catch (erro) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

const findRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await recipesServices.findRecipeById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'recipe not found' });
    }
    return res.status(200).json(recipe);
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

const createRecipes = async (req, res) => {
  // console.log(req.body, 'BODY CONTROLLER');
  try {
    const { name, ingredients, preparation } = req.body;
    const { data } = req.user;
    // console.log(req.user, 'REQ USER'); 
    const recipe = await recipesServices.createRecipes({ name, ingredients, preparation }, data);
    // console.log(recipe, 'RECIPE CONTROLLER');
    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: 'Erro na requisição' });
  }
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
};
