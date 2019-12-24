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
    return res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message });
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

    return res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message });
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

    const cities = await City.findAll({
      where: {
        id: {
          [Op.or]: citiesIds,
        },
      },
    });

    await bucket.setCities(cities,
      { through: { created_at: new Date(), updated_at: new Date() } });

    return res.status(200).send(bucket);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ error: e.message });
  }
});

export default router;
