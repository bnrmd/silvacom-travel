const express = require('express');
const router = express.Router();
const City = require('../models/City');

/**
 * Get all cities
 */
router.get('/', async (req, res) => {
  try {
    res.set({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    });
    const cities = await City.find();
    // res.json(cities);
    res.json(cities);
  } catch (err) {
    res.json({message: err});
  }
});

/**
 * Get city by UUID
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

// router.get('/:cityName', async (req, res) => {
//   try {
//     const city = await City.find
//   }
// })

module.exports = router;
