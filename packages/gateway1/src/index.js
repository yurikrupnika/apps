import path from 'path';
import cors from 'cors';
import express from 'express';
// import ex from 'express-mid';
import morgan from 'morgan';
import proxy from 'express-http-proxy';
// import request from 'axios';
import { port, baseURL } from './config';
import { service0Request } from './api/requests';
// import api from './api';
// import index from './services/index';
// import db from './services/db';
// import server from './services/socket/server';
// import passport from './services/passport';
// import App from './components/App';
// import routes from './components/routes';
const service0 = 3000;
const app = express();
// const route = express.Router();
// const appServer = express();

// const request1 = request.create({ baseURL: 'http://localhost:5000' }); // for docker 0.0.0.0 else localhost

// route.get('/', (req, res) => {
//     console.log('req.ul', req.url); // eslint-disable-line
//     service0Request.get('/api/users')
//         .then((response) => {
//             // console.log('response', response);
//             res.json(response.data);
//             // res.json(['as', 'ass', 'lol']);
//         })
//         .catch((err) => {
//             console.log('err', err);
//         });
//     // res.json(['rx']);
// });
// const assets = path.resolve(__dirname, 'assets');
// app.use('/proxy', proxy('www.google.com'));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

app.use('/api/users', proxy(`${baseURL}${service0}`));
// app.use('/', (req, res, next) => {
//     // console.log('req', req);
//     console.log('req.url', req.url);
//
//     console.log('req.method', req.method);
//     console.log('req.params', req.params);
//     console.log('req.query', req.query);
//
//     if (req.url === '/api/users') {
//         return service0Request.get(req.url, req.query).then(r => res.json(r.data));
//     } else {
//         return next();
//     }
//     // console.log('service0Request', service0Request);
//
//     // res.json('as');
// });
// app.use((req, res, next) => {
//     console.log('gateway req.url', req.url);
//     if (req.url === '/api/users') {
//         console.log('gateway inside req.url', req.url);
//         // return service0Request.get('/api/users')
//         //     .then((response) => {
//         //         // console.log('response', response);
//         //         res.json(response.data);
//         //         // res.json(['as', 'ass', 'lol']);
//         //     })
//         //     .catch((err) => {
//         //         console.log('err', err);
//         //     });
//         return next();
//     } else {
//         return next();
//     }
// });

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
