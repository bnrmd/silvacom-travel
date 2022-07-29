const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Cities', CitySchema);
