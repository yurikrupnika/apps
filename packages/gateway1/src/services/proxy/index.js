import axios from 'axios';

const proxy = (host, destPort) => (req, res, next) => {
    if (req.url === '/users') {
        return axios.get(`${host}:${destPort}/api${req.url}`)
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
