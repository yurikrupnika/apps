import axios from 'axios';
// import {host} from "../../config";

const proxy = (host, destPort, destPort1) => (req, res) => {
    // console.log('req.params', req.params);
    // console.log('req.url', req.url);
    // console.log('req.body', req.body);
    // console.log('req.method', req.method);
    const { method, body, params } = req;
    // console.log('body', body);


    // res.json(Promise.reject(new Error({
    //     message: 'shit'
    // })));
    // if (req.url === '/users') {

    // console.log('req.url.slice(1)', req.url.slice(1));


    // todo dynamic validations
    const ports = {
        users: destPort,
        projects: destPort1,
    };

    const url = req.url.split('/')[1];
    const wantedPort = ports[url];

    axios({
        url: `${host}:${wantedPort}/api${req.url}`,
        method,
        data: body,
        params
    })
        .then((response) => {
            const { status, data } = response;
            res.status(status).json(data);
        })
        .catch((err) => {
            const { response } = err;
            const { status, data } = response;
            res.status(status).json(data);
        });
    // return Promise.reject({
    //     messsage: 'errrpje'
    // })
    // Promise.all([
    //     axios({
    //         url: `${host}:${4000}/api/users/schema`,
    //         method: 'get'
    //     }),
    //     axios({
    //         url: `${host}:${4001}/api/projects/schema`,
    //         method: 'get'
    //     })
    // ])
    //     .then(r => {
    //         console.log('r', r[0].data);
    //         console.log('r', r[1].data);
    //         const url = req.url.split('/')[1];
    //
    //         // res.json(
    //         //     // new Error({
    //         //         {message: 'sas'}
    //         //
    //         //     // })
    //         // )
    //
    //         return axios({
    //             url: `${host}:${wantedPort}/api${req.url}`,
    //             method,
    //             data: body,
    //             params
    //         })
    //             .then((response) => {
    //                 res.json(response.data);
    //             })
    //             .catch((err) => {
    //                 res.json(err.response.data);
    //
    //             });
    //     })
    //     // .then((response) => {
    //     //     console.log('response', response.data);
    //     //     // app.locals.users = response.data;
    //     //     // res.json(response.data);
    //     // })
    //     .catch((err) => {
    //         console.log('err', err);
    //         // res.json(err.response.data);
    //
    //     });
    // const promises = []

    // console.log('req.url', req.url);
};

export default proxy;
