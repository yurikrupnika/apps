import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
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
webServer.use(express.static(assets));
// webServer.use(morgan('dev'));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

// webServer.use((req, res, next) => {
//     // console.log('__dirname', path.join(__dirname));
//     // console.log('assets', assets);
//     // return next();
//     const html = '';
//     const title = '';
//     res.render('index', { html, title });
//     // res.sendFile(path.resolve(process.cwd(), 'dist', 'assets', 'index.ejs'));
// });
webServer.use(morgan('dev'));
// webServer.use(db(databaseUrl));
// webServer.use(passport(webServer)); // todo return that after docker tests
// webServer.use(api);

webServer.use('/api/users', proxy(`${baseURL}:4000`));
// webServer.use('/api', (req, res, next) => {
//     console.log('req,url', req.url);
//     return next();
// });
webServer.use(render(App, routes));

// appServer.listen(appServerPort);
webServer.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
