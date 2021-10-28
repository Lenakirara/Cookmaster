const { ObjectId } = require('mongodb'); 
const connection = require('./connection');

const getAllRecipes = async () => {
  const db = await connection();
  const recipes = await db.collection('recipes').find().toArray();
  return recipes;
};

const findRecipeById = async (id) => {
  const db = await connection();
  const recipe = await db.collection('recipes').findOne({ _id: ObjectId(id) });
  if (!recipe) {
    return null;
  }
  return recipe;
};

const createRecipes = async (recipe, data) => {
 //  console.log(data, 'DATAMODELS');
  const db = await connection();
  const createdRecipes = await db.collection('recipes').insertOne({
    ...recipe,
    userId: data,
  });
 // console.log(createdRecipes, 'RECIPE MODELS');
  return {
    ...recipe,
    userId: data,
    _id: createdRecipes.insertedId,
  };
};

const editRecipe = async (id, recipe, data) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  await db.collection('recipes').findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { ...recipe, userId: data } },
  );
  return {
    _id: id,
    ...recipe,
    userId: data,
  };
};

const deleteRecipe = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  await db.collection('recipes').findOneAndDelete({ _id: ObjectId(id) });
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
  editRecipe,
  deleteRecipe,
};
