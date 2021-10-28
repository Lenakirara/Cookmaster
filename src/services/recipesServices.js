const { ObjectId } = require('mongodb');
const recipesModels = require('../models/recipesModels');

const getAllRecipes = async () => {
  const recipes = await recipesModels.getAllRecipes();
  return recipes;
};

const findRecipeById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return false;
  }
  const recipe = await recipesModels.findRecipeById(id);
  return recipe;
};

const createRecipes = async (recipe, data) => {
  const createdRecipes = await recipesModels.createRecipes(recipe, data.id);
  return createdRecipes;
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
};
