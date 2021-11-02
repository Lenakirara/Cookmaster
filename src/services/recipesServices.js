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

const imageUpdate = async (id, data) => {
  const userId = data.id;
  // console.log(userId, 'IMAGE - SERVICES');
  const { role } = data;
  // console.log(role, 'ROLE-img-SERVICE');
  const imageRecipe = await recipesModels.findRecipeById(id);
  const imgURL = `localhost:3000/src/uploads/${id}.jpeg`;
  if (imageRecipe.userId === userId || role === 'admin') {
    const updateImg = await recipesModels.imageUpdate(id, imgURL);
    return updateImg;
  }
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
  editRecipes,
  deleteRecipe,
  imageUpdate,
};
