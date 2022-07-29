const express = require('express');
const app = express();
const mongoose = require('mongoose');

require('dotenv/config');

// Import routes
const citiesRoute = require('./routes/cities');
const weatherRoute = require('./routes/weather');

app.use('/cities', citiesRoute);
app.use('/weather', weatherRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to DB'));

app.listen(5500, () => {console.log("Server started on port 5500")});
