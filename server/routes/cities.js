/** Express router providing city related routes.
 * @module routes/cities
 * @requires express
 */

/**
 * express module
 * @const
 */
const express = require('express');

/**
 * Model that represents schema of a City object.
 * @const
 */
const City = require('../models/City');

/**
 * Express router to mount city related functions on.
 * @type {object}
 * @const
 * @namespace citiesRoute
 */
const router = express.Router();

/**
 * Route that serves to get all cities.
 * @name get/cities
 * @function
 */
router.get('/', async (req, res) => {
  try {
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.json({message: err});
  }
});

/**
 * Route that serves to get city by UUID.
 * @name get/cities/:cityId
 * @function
 */
router.get('/:cityId', async (req, res) => {
  try {
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const city = await City.findById(req.params.cityId);
    res.json(city);
  } catch (err) {
    res.json({message: err});
  }
});

module.exports = router;
