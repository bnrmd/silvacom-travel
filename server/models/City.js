/** Mongoose schema that represents a City model.
 * @module models/City
 * @requires mongoose
 */

/**
 * mongoose module
 * @const
 */
const mongoose = require('mongoose');

/**
 * Schema for a City model.
 * @function
 */
const CitySchema = mongoose.Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Cities', CitySchema);
