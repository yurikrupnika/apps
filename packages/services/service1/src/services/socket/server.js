import http from 'http';
import IO from 'socket.io';

export default (app) => {
    const server = http.Server(app);
    const io = IO(server);
    // const users = {}; // list of messages locally saved in the server
    io.on('connection', (socket) => {
        socket.on('receiveEntry', (message) => {
            console.log('message', message); // eslint-disable-line
            // return next();
        });

        socket.on('disconnect', (reason) => { // eslint-disable-line no-unused-vars
            // delete users[socket.nickname];
        });
    });

    return server;
};
