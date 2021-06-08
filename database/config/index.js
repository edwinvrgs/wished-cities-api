require('dotenv').config();

const defaultOptions = {
  dialect: 'postgres',
  define: {
    'createdAt': 'created_at',
    'updatedAt': 'updated_at',
  },
};

module.exports = {
  development: {
    ...defaultOptions,
    url: process.env.DEV_DATABASE_URL,
  },
  test: {
    ...defaultOptions,
    url: process.env.TEST_DATABASE_URL,
  },
  production: {
    ...defaultOptions,
    url: process.env.DATABASE_URL,
  },
};
