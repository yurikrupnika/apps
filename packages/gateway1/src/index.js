// import path from 'path';
import cors from 'cors';
import express from 'express';
import os from 'os';
// import ex from 'express-mid';
import morgan from 'morgan';
import axios from 'axios';
// import proxy from 'express-http-proxy';
// import request from 'axios';
import { port, baseURL } from './config';
// import { service0Request } from './api/requests';
const service0 = 4000;
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

app.use('/api', (req, res, next) => {
    // console.log('process.emv', process.env.HOSTNAME);
    console.log('ox.hostname()', os.hostname());
    console.log('ox.hostntypeame()', os.type());
    console.log('ox.platform()', os.platform());

    if (req.url === '/users') {
        return axios.get(`${baseURL}${4000}/api${req.url}`)
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                console.log('err', err);
            });
    }
    return next();
});

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
