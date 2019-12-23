import { Router } from 'express';

import { DB } from './constants';

const router = Router();

router.get('/', function (req, res, next) {
  res.send('Hello world from API route');
});

router.get('/countries', async function (req, res, next) {
  try {
    const query = `SELECT * FROM country`;
    const result = await DB.any(query);

    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.get('/cities/:country_name', async function (req, res, next) {
  try {
    const { country_name } = req.params;
    const query = `SELECT name, price 
      FROM city ci 
      JOIN country co ON ci.id_country = co.id 
      WHERE co.name = ${country_name}`;

    const result = await DB.any(query);

    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.post('/save-bucket', async function (req, res, next) {
  try {
    const { country, cities, cost, owner } = req.data;

    // Create the bucket
    const query = `INSERT INTO bucket (owner, country, cost)
    VALUES (${owner}, ${country}, ${cost});`;

    const result = await DB.one(query);

    const { id } = result;

    console.log(result, id);

    // Link all the cities selected to the bucket
    const queries = cities.map(city => (
      `INSERT INTO bucket_cities (city_id, bucked_id)
    VALUES (${city.id}, ${id});`
    )).join(';');

    await DB.multi(queries);

    res.send(id);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export default router;
