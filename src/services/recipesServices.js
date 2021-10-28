const recipesModels = require('../models/recipesModels');

const getAllRecipes = async () => {
  const recipes = await recipesModels.getAllRecipes();
  return recipes;
};

const createRecipes = async (recipe, data) => {
  const createdRecipes = await recipesModels.createRecipes(recipe, data.id);
  return createdRecipes;
};

module.exports = {
  getAllRecipes,
  createRecipes,
};
