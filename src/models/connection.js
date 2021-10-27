const { MongoClient } = require('mongodb');

require('dotenv').config();

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

const OPTIONS = {
useNewUrlParser: true,
useUnifiedTopology: true,
};

let db;
async function connection() {
if (db) return Promise.resolve(db);
return MongoClient
.connect(MONGO_DB_URL, OPTIONS)
.then((conn) => {
db = conn.db(DB_NAME);
return db;
})
.catch((err) => {
console.error(err);
});
}

module.exports = connection; 