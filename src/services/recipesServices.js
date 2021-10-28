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

const editRecipes = async (id, recipe, data) => {
  const editedRecipe = await recipesModels.editRecipe(id, recipe, data);
  return editedRecipe;
};

const deleteRecipe = async (id) => {
  const deletedRecipe = await recipesModels.deleteRecipe(id);
  return deletedRecipe;
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
  editRecipes,
  deleteRecipe,
};
