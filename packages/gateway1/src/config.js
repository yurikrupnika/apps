/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 3000;
const appServerPort = port - 100;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.HOST || 'http://localhost';
const destPort = Number(process.env.DEST_PORT) || 4000;
const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/local-service1';

module.exports = {
    port,
    appServerPort,
    databaseUrl,
    host,
    destPort,
    isProd
};
