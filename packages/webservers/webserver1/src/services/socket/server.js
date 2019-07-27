import http from 'http';
import IO from 'socket.io';
import s from 'socket.io-client';

const gateway = s('http://localhost:3000');
// var socket = require('socket.io-client')('http://localhost');
export default (app) => {
    const server = http.Server(app);
    const io = IO(server);
    io.on('connection', (socket) => {
        // console.log('socket', socket);
        socket.on('entry', (message, next) => {
            console.log('entry', message); // eslint-disable-line
            // users.emit('receiveEntry', message);
            gateway.emit('receiveEntry', message);
            return next();
        });
        // socket.on('event', (message, next) => {
        //     console.log('message', message); // eslint-disable-line
        //     // users.emit('receiveEntry', message);
        //     // projects.emit('receiveEntry', message);
        //     return next();
        // });

        socket.on('disconnect', (reason) => { // eslint-disable-line no-unused-vars
            // delete users[socket.nickname];
        });
    });

    return server;
};
