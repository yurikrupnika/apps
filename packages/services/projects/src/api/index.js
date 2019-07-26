import express from 'express';
import projects from './projects';
// import projects from './projects';
// import auth from './auth';

const route = express.Router();

// route.use('auth', auth);
route.use('/api', [
    projects,
    // projects,
    // auth
]);

export default route;
