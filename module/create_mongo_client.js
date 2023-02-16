const {MongoClient} = require('mongodb');
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL = `mongodb+srv://tom:${DB_PASSWORD}@cluster0.vsnlk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(DB_URL);

module.exports = client;
