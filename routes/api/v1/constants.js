import pgp                from 'pg-promise';
import { DB_CONFIG, ENV } from './env';

const initOptions = {
  // global event notification;
  error (error, e) {
    if (e.cn) {
      console.log('Connection:', e.cn);
      console.log('Event:', error.message || error);
    }
  },
};

export const DB = pgp(initOptions)(DB_CONFIG[ENV]);
