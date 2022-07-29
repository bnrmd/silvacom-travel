const express = require('express');
const request = require('request');
const router = express.Router();

require('dotenv/config');

router.get('/', async (req, res) => {
  console.log('hello')
});

/**
 * Get weather by city name
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
      // res.json(body);
    }
  })
});

module.exports = router;
