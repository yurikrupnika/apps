import express from 'express';
import morgan from 'morgan';
import statusMonitor from 'express-status-monitor';
import { port, databaseUrl } from './config';
import api from './api';
import db from './services/db';

const app = express();
const route = express.Router();
route.get('/', (req, res) => {
    res.json(['service1 root url']);
});
app.use(morgan('dev'));
app.use(statusMonitor());
app.use(express.json(), express.urlencoded({ extended: false }));

app.use(db(databaseUrl));
app.use(api);
app.use(route);

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
