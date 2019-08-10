import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
// import swaggerDocument from '../swagger.json'; // todo create auto
import {
    port, usersHost, projectsHost
} from './config';
import proxy from './services/proxy';
import server from './services/socket/server';

// console.log('swaggerDocument', swaggerDocument);

const app = express();

// app.use((req, res) => {});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

const services = {
    users: usersHost,
    projects: projectsHost,
};

const route = express.Router();
// route.use('/', swaggerUi.serve);
// route.get('/', swaggerUi.setup(swaggerDocument));

app.use('/doc', route);
app.use('/api', proxy(services));

server(app, usersHost, projectsHost).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
