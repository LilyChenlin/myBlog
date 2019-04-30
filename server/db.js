const mongoose = require('mongoose').MongoClient;

mongoose.connect('mongodb://localhost:27017/blog',{useMongoClient: true})

const userSchema = new mongoose.Schema({
  name: String,
  password: String
})

const Models = {
  User: mongoose.model('User', userSchema),
}

module.exports = Models
