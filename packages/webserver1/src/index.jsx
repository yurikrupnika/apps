import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import axios from 'axios';
import proxy from 'express-http-proxy';
import { port, isProd, baseURL } from './config';
// import api from './api';
import render from './services/render';
// import db from './services/db';
// import server from './services/socket/server';
// import passport from './services/passport';
import App from './components/App';
import routes from './components/routes';
// import {} from './config';

const webServer = express();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

// webServer.use(db(databaseUrl));
// webServer.use(passport(webServer)); // todo return that after docker tests
// webServer.use(api);

const route = express.Router();

// webServer.use('/api/users', proxy('http://localhost:4000/api/users'));
webServer.use('/api', (req, res) => {
    axios.get('http://localhost:4000/api/users')
        .then((response) => {
            res.json(response.data);
        })
        .catch((err) => {
            console.log('err', err);
        });
});

// webServer.use('/api/users', (req, res, next) => {
//     console.log('req.url', req.url);
//     // proxy(`${baseURL}:4000`);
//     return next();
// });

// webServer.use('/api/users', proxy(`${baseURL}:4000`, {
//     // proxyReqOptDecorator: function(proxyReqOpts, srcReq) {
//     //     console.log('proxyReqOpts', proxyReqOpts.url);
//     //     console.log('srcReq', srcReq.url);
//     //
//     //
//     //     // you can update headers
//     //     // proxyReqOpts.headers['Content-Type'] = 'text/html';
//     //     // you can change the method
//     //     // proxyReqOpts.method = 'GET';
//     //     return proxyReqOpts;
//     // }
// }));
// webServer.use('/api/users', (req, res, next) => {
//
//     console.log('req.url middleware', req.url);
//     // return proxy('/api/users', `${baseURL}:4000`);
//     // return next(proxy('/api/users', `${baseURL}:4000`));
//     return next();
// });
// webServer.use('/api/users', proxy(`${baseURL}:4000/api/users`, {
//     proxyReqPathResolver(req) {
//         console.log('req url in proxyReqPathResolver', req.url);
//         // return new Promise(function (resolve, reject) {
//         //     setTimeout(function () {   // simulate async
//         //         var parts = req.url.split('?');
//         //         var queryString = parts[1];
//         //         var updatedPath = parts[0].replace(/test/, 'tent');
//         //         var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');
//         //         resolve(resolvedPathValue);
//         //     }, 200);
//         // });
//     }
// }));
// webServer.use(route);
webServer.use(render(App, routes));

// appServer.listen(appServerPort);
webServer.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
