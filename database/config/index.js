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
    use_env_variable: process.env.DEV_DATABASE_URL,
  },
  test: {
    ...defaultOptions,
    use_env_variable: process.env.TEST_DATABASE_URL,
  },
  production: {
    ...defaultOptions,
    use_env_variable: process.env.DATABASE_URL,
  },
};
