import http from 'http';
import IO from 'socket.io';
import s from 'socket.io-client';

const users = s('http://localhost:4000');
const projects = s('http://localhost:4001');

export default (app) => {
    const server = http.Server(app);
    const io = IO(server);
    // const users = {}; // list of messages locally saved in the server
    io.on('connection', (socket) => {
        socket.on('receiveEntry', (message, next) => {
            console.log('message', message); // eslint-disable-line
            // console.log('io', io);
            console.log('id)', socket.id); // eslint-disable-line
            // const { nickname, avatar } = socket;
            // send nickname and avatar with the message taken from socket to all messages
            users.emit('receiveEntry', message, () => {});
            projects.emit('receiveEntry', message, () => {});
            // next();
        });

        // socket.on('newUser', (user, next) => {
        //     if (Object.keys(users).includes(user.nickname)) {
        //         return next('Name already in use');
        //     }
        //     socket.nickname = user.nickname; // eslint-disable-line no-param-reassign
        //     socket.avatar = user.avatar; // eslint-disable-line no-param-reassign
        //     users[user.nickname] = user;
        //     return next(null);
        // });

        socket.on('disconnect', (reason) => { // eslint-disable-line no-unused-vars
            // delete users[socket.nickname];
        });
    });

    // io.on('event', (request) => {
    //     console.log('request.url', request.url);
    // });

    return server;
};
