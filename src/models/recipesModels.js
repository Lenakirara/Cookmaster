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
  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { ...recipe } },
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
  await db.collection('recipes').deleteOne({ _id: ObjectId(id) });
};

const imageUpdate = async (id, image) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  await db.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    { $set: { image } },
  );
  const result = await findRecipeById(id);
  return result;
};

module.exports = {
  getAllRecipes,
  findRecipeById,
  createRecipes,
  editRecipe,
  deleteRecipe,
  imageUpdate,
};
