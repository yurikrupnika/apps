import path from 'path';
import cors from 'cors';
import express from 'express';
// import ex from 'express-mid';
import morgan from 'morgan';
import request from 'axios';
import { port } from './config';
// import api from './api';
// import index from './services/index';
// import db from './services/db';
// import server from './services/socket/server';
// import passport from './services/passport';
// import App from './components/App';
// import routes from './components/routes';

const app = express();
const route = express.Router();
// const appServer = express();

const request1 = request.create({ baseURL: 'http://localhost:5000' }); // for docker 0.0.0.0 else localhost

route.get('/', (req, res) => {
    request1.get('/api/users')
        .then((response) => {
            // console.log('response', response);
            res.json(response.data);
            // res.json(['as', 'ass', 'lol']);
        })
        .catch((err) => {
            console.log('err', err);
        });
    // res.json(['rx']);
});
const assets = path.resolve(__dirname, 'assets');

app.use(cors());
app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

app.use(morgan('dev'));
// webServer.use(ex);
// webServer.use(db(databaseUrl));
// webServer.use(passport(webServer)); // todo return that after docker tests
// webServer.use(api);
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
