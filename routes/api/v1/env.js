export const ENV = 'development';

const defaultDBConfig = {
  user: 'edvargas',
  password: 'edvargas',
  host: 'localhost',
  port: 5432,
  database: 'wished-cities',
};

export const DB_CONFIG = {
  test: {
    ...defaultDBConfig,
    database: 'db',
  },
  development: {
    ...defaultDBConfig,
    // Docker
    host: 'db',
  },
  production: {
    ...defaultDBConfig,
  },
  staging: {
    ...defaultDBConfig,
  },
};
