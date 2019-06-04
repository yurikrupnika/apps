import path from 'path';
// import cors from 'cors';
import express from 'express';
// import ex from 'express-mid';
import morgan from 'morgan';
// import request from 'axios';
// import { port, baseURL } from './config';
import { port } from './config';


// const api = request.create({ baseURL });
// import api from './api';
// import render from './services/render';
// import db from './services/db';
// import server from './services/socket/server';
// import passport from './services/passport';
// import App from './components/App';
// import routes from './components/routes';
// import App from '@krupnik/app1/dist/assets/main';
// console.log('App', App);
// console.log('App', App);

const app = express();
const route = express.Router();
// const appServer = express();
route.get('/', (req, res) => {
    // api.get('/')
    //     .then((response) => {
    //         res.json(response.data);
    //     })
    //     .catch((err) => {
    //         console.log('err', err);
    //     });
    res.json(['webserver respinse']);
});
const assets = path.resolve(__dirname, 'assets');

// webServer.use(cors());
app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

app.use(morgan('dev'));
// webServer.use(ex);
// webServer.use(db(databaseUrl));
// webServer.use(passportyt(webServer)); // todo return that after docker tests
// webServer.use(api);
app.use(route);
// app.use(render());
// app.use(render(App, routes));
// webServer.use(index());

// appServer.listen(appServerPort);
app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
