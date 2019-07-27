import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import axios from 'axios';


import {
    port, host, destPort, destPort1
} from './config';
import proxy from './services/proxy';

const app = express();

// app.use((req, res) => {});
app.use(cors());
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));

app.use('/api', proxy(host, destPort, destPort1));

app.listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
