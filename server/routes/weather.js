/** Express router providing weather related routes.
 * @module routes/weather
 * @requires express
 * @requires request
 */

/**
 * express module
 * @const
 */
const express = require('express');

/**
 * request module
 * @const
 */
const request = require('request');

/**
 * Express router to mount weather related functions on.
 * @type {object}
 * @const
 * @namespace citiesRoute
 */
const router = express.Router();

/**
 * Requires .env config.
 */
require('dotenv/config');

/**
 * Route that serves to get weather by city name.
 * @name get/weather/:cityName
 * @function
 */
router.get('/:cityName', async (req, res) => {

  request(process.env.WEATHER_CURRENT + req.params.cityName, function(error, response, body) {
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    if (!error && response.statusCode == 200) {
      const parsedBody = JSON.parse(body);
      res.send(parsedBody);
    }
  })
});

module.exports = router;
