/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 4001;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.DOCKER_HOST || process.env.HOST || 'http://localhost';
const baseURL = `${host}:${isProd || process.env.DEBUG ? port : port + 1}`;
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/service1';

// console.log('port', port); // eslint-disable-line
// console.log('host', host); // eslint-disable-line
// console.log('baseurl', baseURL); // eslint-disable-line

module.exports = {
    port,
    databaseUrl,
    baseURL,
    isProd,
    host
};
