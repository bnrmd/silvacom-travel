/** Express router providing city related routes.
 * @module routes/cities
 * @requires mongoose
 * @requires express
 */

/**
 * mongoose module
 * @const
 */
const mongoose = require('mongoose');

/**
 * express module
 * @const
 */
const express = require('express');
const app = express();

/**
 * Requires .env config.
 */
require('dotenv/config');

/**
 * Routes for cities and weather.
 */
const citiesRoute = require('./routes/cities');
const weatherRoute = require('./routes/weather');

/**
 * Middleware.
 */
app.use('/cities', citiesRoute);
app.use('/weather', weatherRoute);

/**
 * Connection to DB.
 */
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'));

app.listen(5500, () => {console.log("Server started on port 5500")});
