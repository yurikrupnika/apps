import axios from 'axios';

const proxy = (host, destPort, destPort1) => (req, res, next) => {
    console.log('req.params', req.params);
    console.log('req.url', req.url);

    if (req.url === '/users') {
        return axios.get(`${host}:${destPort}/api${req.url}`)
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
    if (req.url === '/projects') {
        // console.log('destPort', destPort);

        return axios.get(`${host}:${destPort1}/api${req.url}`)
            .then((response) => {
                res.json(response.data);
            })
            .catch((err) => {
                console.log('err', err); // eslint-disable-line
            });
    }
    return next();
};

export default proxy;
