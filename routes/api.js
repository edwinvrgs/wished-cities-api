import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Hello world from API route');
});

router.get('/countries', function (req, res, next) {
  // TODO - Get this values from database or a public API
  res.send(['Venezuela', 'Chile', 'EEUU']);
});

router.get('/cities', function (req, res, next) {
  // TODO - Get this values from database
  res.send(['Caracas', 'Santiago', 'New York']);
});

export default router;
