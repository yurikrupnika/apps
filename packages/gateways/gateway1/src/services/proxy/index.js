import axios from 'axios';

const proxy = (host, destPort, destPort1) => (req, res, next) => {
    // console.log('req.params', req.params);
    // console.log('req.url', req.url);
    // console.log('req.body', req.body);
    // console.log('req.method', req.method);
    const { method } = req;

    // res.json(Promise.reject(new Error({
    //     message: 'shit'
    // })));
    // if (req.url === '/users') {

    // console.log('req.url.slice(1)', req.url.slice(1));


    const ports = {
        users: 4000,
        projects: 4001,
    };
    const wantedPort = ports[req.url.slice(1)];

    return axios({
        url: `${host}:${wantedPort}/api${req.url}`,
        method,
        data: req.body,
        params: {
            // ID: 12345
        },
        // data: {
        //     firstName: 'Fred',
        //     lastName: 'Flintstone'
        // }
    })
        .then((response) => {
            // return new Error({
            //     message: 'shit'
            // });
            res.json(response.data);
            // res.json(new Error({
            //     message: 'shit'
            // }));
        })
        .catch((err) => {
            res.json(err);
            // console.log('err', err); // eslint-disable-line
        });
    // }
    // if (req.url === '/projects') {
    //     // console.log('destPort', destPort);
    //
    //     return axios({
    //         url: `${host}:${destPort1}/api${req.url}`,
    //         method,
    //         data: req.body,
    //         params: {
    //             // ID: 12345
    //         },
    //         // data: {
    //         //     firstName: 'Fred',
    //         //     lastName: 'Flintstone'
    //         // }
    //     })
    //         .then((response) => {
    //             res.json(response.data);
    //         })
    //         .catch((err) => {
    //             res.json(err);
    //             // console.log('err', err); // eslint-disable-line
    //         });
    // }
    return next();
};

export default proxy;
