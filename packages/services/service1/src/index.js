import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import statusMonitor from 'express-status-monitor';
import os from 'os';
import { port, databaseUrl, host } from './config';
import api from './api';
import db from './services/db';
import server from './services/socket/server';

const app = express();
app.use(cors());
const route = express.Router();
route.get('/', (req, res) => {
    res.json(['service1 root url']);
});
app.use(morgan('dev'));
app.use(statusMonitor());
app.use(express.json(), express.urlencoded({ extended: false }));

app.use(db(databaseUrl));
app.use((req, res, next) => {
    console.log('host', host); // eslint-disable-line no-console
    console.log('host', os.hostname()); // eslint-disable-line no-console
    if (req.url.includes('info')) {
        console.log('os.hostname()', os.hostname()); // eslint-disable-line no-console
        console.log('os.type()', os.type()); // eslint-disable-line no-console
        console.log('os.platform()', os.platform()); // eslint-disable-line no-console
        console.log('os.cpus()', os.cpus()); // eslint-disable-line no-console
    }
    return next();
});
app.use(api);
app.use(route);

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
