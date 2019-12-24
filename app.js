import express from 'express';
import cors    from 'cors';

import { api } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', api);

module.exports = app;
