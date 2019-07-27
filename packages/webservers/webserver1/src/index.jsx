import path from 'path';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import render from '@krupnik/render';
import proxy from 'express-http-proxy';
import server from './services/socket/server';
import App from './components/App';
import routes from './components/routes';
import {
    port, isProd, destPort, destHost
} from './config';

const webServer = express();

const assets = path.join(process.cwd(), !isProd ? 'dist' : '', 'assets');

webServer.use(cors());
webServer.use(morgan('dev'));
webServer.use(express.static(assets));
webServer.use(express.json(), express.urlencoded({ extended: false }));
webServer.set('view engine', 'ejs');
webServer.set('views', assets);

const route = express.Router();
route.all('/api/*', proxy(`${destHost}:${destPort}`));

webServer.use((req, res, next) => {
    // console.log('req.client', req.client);
    return next();
});
webServer.use(route);

webServer.use(render(App, routes));

server(webServer).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
