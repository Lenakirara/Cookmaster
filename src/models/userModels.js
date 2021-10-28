const connection = require('./connection');

const getUsers = async () => {
  const db = await connection();
  const users = await db.collection('users').find().toArray();
  return users;
};

const createUser = async (name, email, password) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({
    name,
    email,
    password,
    role: 'user' });
  return {
    name,
    email,
    role: 'user',
    _id: user.insertedId,
  };
};

const emailExist = async (email) => {
  const db = await connection();
  const userEmail = await db.collection('users').findOne({ email });
  return userEmail;
};

module.exports = {
  getUsers,
  createUser,
  emailExist,
};
