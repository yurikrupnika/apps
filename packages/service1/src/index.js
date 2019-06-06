// import path from 'path';
// import cors from 'cors';
import express from 'express';
// import ex from 'express-mid';
import morgan from 'morgan';
import statusMonitor from 'express-status-monitor';
import { port, databaseUrl } from './config';
import api from './api';
// import index from './services/index';
import db from './services/db';
// import server from './services/socket/server';
// import passport from './services/passport';
// import App from './components/App';
// import routes from './components/routes';

const app = express();
const route = express.Router();
route.get('/', (req, res) => {
    res.json(['service1 root url']);
});
app.use(morgan('dev'));
app.use(statusMonitor());
app.use(express.json(), express.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
// app.set('views', assets);
//
// app.use(morgan('dev'));
// // webServer.use(ex);
app.use((req, res, next) => {
    // console.log('service1 process.emv', process.env);
    return next();
})
app.use(db(databaseUrl));
// // webServer.use(passport(webServer)); // todo return that after docker tests
app.use(api);
app.use(route);

// webServer.use(index());

// appServer.listen(appServerPort);
app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
