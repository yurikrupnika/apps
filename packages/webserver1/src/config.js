/* this file is used in webpack client for dev port and proxy host */
console.log('process.env.HOST', process.env.HOST); // eslint-disable-line
console.log('process.env.host', process.env.host); // eslint-disable-line
console.log('process.env.DESTINATION_HOST', process.env.DESTINATION_HOST); // eslint-disable-line
console.log('process.env.DOCKER_HOST', process.env.DOCKER_HOST); // eslint-disable-line

const destHost = process.env.DESTINATION_HOST || process.env.DOCKER_HOST || 'http://localhost';
const port = Number(process.env.PORT) || 5000;
const isProd = process.env.NODE_ENV === 'production';
const host = process.env.DOCKER_HOST || 'http://localhost';
const destPort = Number(process.env.DEST_PORT) || 3000;
console.log('host', host); // eslint-disable-line
console.log('destPort', destPort); // eslint-disable-line

module.exports = {
    port,
    host,
    destPort,
    isProd,
    destHost
};
