/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 5000;
// const appServerPort = port - 100;
const isProd = process.env.NODE_ENV === 'production';
// const baseURL = `http://localhost:${appServerPort}`;
const baseURL = 'http://localhost';
// const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/react-boilerplate';

module.exports = {
    port,
    // appServerPort,
    // databaseUrl,
    baseURL,
    isProd
};
