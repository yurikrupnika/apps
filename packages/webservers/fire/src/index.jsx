import path from 'path';
import cors from 'cors';
// import os from 'os';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
// import React from 'react';
// import cors from 'cors';
// const functions = require('firebase-functions');
import { https } from 'firebase-functions';
// import admin from 'firebase-admin';
// const admin = require('firebase-admin');
// const React = require('react');
// const firebase = require('firebase');
// import axios from 'axios';
// import render from '@krupnik/render';
// import proxy from 'express-http-proxy';
// import render from './services/render';
import render from '@krupnik/render';
// import {
//     port, isProd, host, destPort, destHost
// } from './config';
import App from './components/App';
import routes from './components/routes';
// import axios from 'axios';

const webServer = express();
const app = express();

const assets = path.join(process.cwd(), '');

webServer.use(helmet());
webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

const route = express.Router();
// const route1 = express.Router();
// route1.get('/', (request, response) => {
//     api
//         .then((res) => {
//             response.json(res.data);
//         })
//         .catch((error) => {
//             response.json(error);
//         });
// });
// route.all('/api/users', proxy(`${destHost}:${destPort}`));
route.get('/a', (req, res) => {
    res.send('as');
});
app.use(route);
// webServer.use('/buc', route1);
// app.use((req, res, next) => {
//     console.log('host', host); // eslint-disable-line no-console
//     console.log('host', os.hostname()); // eslint-disable-line no-console
//     if (req.url.includes('info')) {
//         console.log('os.hostname()', os.hostname()); // eslint-disable-line no-console
//         console.log('os.type()', os.type()); // eslint-disable-line no-console
//         console.log('os.platform()', os.platform()); // eslint-disable-line no-console
//         console.log('os.cpus()', os.cpus()); // eslint-disable-line no-console
//     }
//     return next();
// });

// if (isProd) {
webServer.use(render(App, routes));
// } else {
//     webServer.use(render());
// }

const api = https.onRequest(app);
const ssr = https.onRequest(webServer);
export {
    api,
    ssr
};
// webServer.listen(port, (err) => {
//     if (err) {
//         console.log('err', err); // eslint-disable-line no-console
//     } else {
//         console.log(`running at port: ${port}`); // eslint-disable-line no-console
//     }
// });
