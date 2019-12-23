import { QueryFile } from 'pg-promise';
import path          from 'path';

// Helper for linking to external query files
function sql (file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

export default {
  database: {
    create: sql('database.sql'),
  },
  city: {
    populate: sql('city.sql'),
  },
  country: {
    populate: sql('country.sql'),
  },
};
