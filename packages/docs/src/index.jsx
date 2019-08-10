import path from 'path';
// import cors from 'cors';
import express from 'express';
import React from 'react';
import ejs from 'ejs';
import Koa from 'koa';
import Router from 'koa-router';
import statics from 'koa-static';
import swagger from 'swagger-koa';
import views from 'koa-render-view';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import morgan from 'morgan';
import render from '@krupnik/render';
import swaggerUi from 'swagger-ui-express';
import jsdocx from 'jsdoc-x';
import swaggerDocument from '../swagger.json';
// import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';
import {
    port, isProd
} from './config';
// import handleRender from '../../node/render/src/handleRender';

// const app = new Koa();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

// EXPRESS
const app = express();
app.use(morgan('dev'));
app.use(express.static(assets));
app.use(express.json(), express.urlencoded({ extended: false }));
// app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
// const ass = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets', 'docs');
app.set('views', assets);
const routeSwagger = express.Router();
//

const route = express.Router();
route.get('/', (req, res) => {
    // app.use(express.static(ass));
    // app.set('views', [
    //     ass,
    // ]);
//     // app.use(express.static(ass));
//     // route.use(app.engine('html', ejs.renderFile));®
    console.log('req.url', req.url);
    app.engine('html', ejs.renderFile);
    // app.set('base', 'docs');
    app.set('view engine', 'html');
    return res.render('index.html', {});
});
// route.get('/coverage', (req, res) => {
//     // app.use(express.static(ass));
//     // app.set('views', [
//     //     ass,
//     // ]);
//     const as = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets', 'lcov-report');
//     app.use(express.static(as));
// //     // route.use(app.engine('html', ejs.renderFile));®
// //     app.engine('html', ejs.renderFile);
//     app.set('view engine', 'html');
//     return res.render('lcov-report/index.html', {});
// });

// route.all('/api/*', proxy(`${destHost}:${destPort}`));
// app.use(statics(assets));
// app.use(views(assets, { extension: 'ejs' }));

routeSwagger.use('/', swaggerUi.serve);
routeSwagger.get('/', swaggerUi.setup(swaggerDocument));

app.use('/lol', route);

app.use('/api-docs', routeSwagger);
// route.get(route);
// route.use((req, res) => res.render('index.html'));
const mainRoute = express.Router();
// mainRoute.get('/', (req, response) => {
//     return response.render('index.ejs', {});
// });
// app.use(mainRoute);
// app.use(render());
// app.use((req, res) => {
//     return res.render('index.ejs');
// });
app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
