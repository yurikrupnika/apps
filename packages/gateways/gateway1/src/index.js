import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import {
    port, usersHost, projectsHost
} from './config';
import proxy from './services/proxy';
import server from './services/socket/server';

const app = express();

// app.use((req, res) => {});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

const services = {
    users: usersHost,
    projects: projectsHost,
};

app.use('/api', proxy(services));

server(app, usersHost, projectsHost).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
