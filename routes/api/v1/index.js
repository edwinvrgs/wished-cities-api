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

router.get('/cities/:country_id', async function (req, res, next) {
  try {
    const { country_id } = req.params;
    const query = `SELECT * FROM city
      WHERE id_country = ${country_id}`;

    const result = await DB.any(query);

    res.send(result);
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

router.post('/save-bucket', async function (req, res, next) {
  try {
    const { country, cities, cost, owner } = req.body;

    // Create the bucket
    const query = `INSERT INTO bucket (owner, id_country, cost)
    VALUES ('${owner}', ${country}, ${cost}) RETURNING id;`;

    const [result] = await DB.any(query);

    const { id } = result;

    // Link all the cities selected to the bucket
    const queries = cities.map(cityId => (
      `INSERT INTO bucket_city (id_city, id_bucket)
    VALUES (${cityId}, ${id});`
    )).join(';');

    await DB.multi(queries);

    res.send({ id });
  } catch (e) {
    res.status(500);
    res.send(e);
  }
});

export default router;
