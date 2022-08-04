const request = require('supertest');

/**
 * express module
 * @const
 */
const express = require('express');
const app = express();

/**
 * Routes for cities and weather.
 */
const citiesRoute = require('./routes/cities');
const weatherRoute = require('./routes/weather');
const {response} = require('express');

/**
 * Middleware.
 */
app.use('/cities', citiesRoute);
app.use('/weather', weatherRoute);

/**
 * Tests.
 */

describe('Cities API', () => {
  it('GET /cities', () => {
    return request(app).get('/cities').expect('Content-Type', /json/).expect(200)
      .then((response) => {
        expect(response.body).toEqual(expect.arrayContaining([
          expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
          })
        ]))
      })
  })

  it('GET /cities/id --> Edmonton', () => {
    return request(app).get('/cities/62e049f89f5f8e15881530cb').expect('Content-Type', /json/).expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            _id: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
          })
        )
      })
  })
})
