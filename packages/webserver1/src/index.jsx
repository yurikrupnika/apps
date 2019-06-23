import path from 'path';
import cors from 'cors';
import os from 'os';
import express from 'express';
import morgan from 'morgan';
// import axios from 'axios';
import render from '@krupnik/render'; // eslint-disable-line
// import proxy from 'express-http-proxy';
// import render from './services/render';
import {
    port, isProd, host
} from './config';
import App from './components/App';
import routes from './components/routes';
// import proxy from "../../gateway1/src/services/proxy";

const webServer = express();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

// webServer.use('/api', proxy(`0.0.0.0:4000/api/users`));
// webServer.use('/api', (req, res, next) => {
//     if (req.url === '/users') {
//         return axios.get(`${host}:${destPort}/api${req.url}`)
//             .then((response) => {
//                 res.json(response.data);
//             })
//             .catch((err) => {
//                 console.log('err', err); // eslint-disable-line no-console
//             });
//     }
//     return next();
// });
// webServer.use('/api', proxy('localhost:4000'));
webServer.use((req, res, next) => {
    console.log('host', host); // eslint-disable-line no-console
    if (req.url.includes('info')) {
        console.log('os.hostname()', os.hostname()); // eslint-disable-line no-console
        console.log('os.type()', os.type()); // eslint-disable-line no-console
        console.log('os.platform()', os.platform()); // eslint-disable-line no-console
        console.log('os.cpus()', os.cpus()); // eslint-disable-line no-console
    }
    return next();
});

webServer.use(render(App, routes));

webServer.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
