import { Router } from 'express';
import { Op }     from 'sequelize';

import models from '../../../database/models';

const { Country, City, Bucket } = models;
const router = Router();

router.get('/', function (req, res, next) {
  res.send('Hello world from API route');
});

router.get('/countries', async function (req, res, next) {
  try {
    const result = await Country.findAll();
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

router.get('/cities/:countryId', async function (req, res, next) {
  try {
    const { countryId } = req.params;

    const result = await City.findAll({
      where: {
        countryId,
      },
    });

    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

router.post('/save-bucket', async function (req, res, next) {
  try {
    const { country, cities: citiesIds, cost, owner } = req.body;

    const bucket = await Bucket.create({
      countryId: country,
      cost,
      owner,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const { id } = bucket.get({ plain: true });

    const cities = await City.findAll({
      where: {
        id: {
          [Op.or]: citiesIds,
        },
      },
    });

    console.log({ cities });

    await bucket.setCities(cities,
      { through: { created_at: new Date(), updated_at: new Date() } });

    res.send({ id });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send(e);
  }
});

export default router;
