/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 4000;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.DOCKER_HOST || process.env.HOST || 'http://localhost';
const baseURL = `${host}:${isProd || process.env.DEBUG ? port : port + 1}`;
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/service1';

module.exports = {
    port,
    databaseUrl,
    baseURL,
    isProd,
    host
};
