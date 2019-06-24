/* this file is used in webpack client for dev port and proxy host */
console.log('process.env', process.env); // eslint-disable-line

const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.DOCKER_HOST || process.env.HOST || 'http://localhost';
const destPort = Number(process.env.DEST_PORT) || 3000;
console.log('host', host); // eslint-disable-line
console.log('destPort', destPort); // eslint-disable-line

module.exports = {
    port,
    host,
    destPort,
    isProd
};
