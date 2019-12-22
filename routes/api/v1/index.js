import { Router } from 'express';
import axios      from 'axios';

import { COUNTRY_API_URL } from './config';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello world from API route');
});

router.get('/countries', async function (req, res, next) {
  try {
    const response = await axios.get(COUNTRY_API_URL);
    res.send(response.data);
  } catch (e) {
    res.status(500);
    res.send();
  }
});

router.get('/cities/:country_code', function (req, res, next) {
  // TODO - Get this values from database
  const {country_code} = req.params;
  res.send(['Caracas', 'Santiago', 'New York', country_code]);
});

export default router;
