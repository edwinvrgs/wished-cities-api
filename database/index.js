import { DB } from '../routes/api/v1/constants';

import scripts from './sql';

const initDatabase = async () => {
  await DB.none(scripts.database.create);
  await DB.none(scripts.country.populate);
  await DB.none(scripts.city.populate);
};
