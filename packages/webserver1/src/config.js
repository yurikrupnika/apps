/* this file is used in webpack client for dev port and proxy host */
const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.HOST || 'http://localhost';
const destPort = Number(process.env.DEST_PORT) || 3000;

module.exports = {
    port,
    host,
    destPort,
    isProd
};
