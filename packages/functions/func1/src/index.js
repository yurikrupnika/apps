// exports.function = (req, res) => {
//     res.status(200).json({
//         message: 'ok'
//     });
// };

// import button from '@krupnik/button';
// import render from '@krupnik/render/dist/cjs/index';
const port = process.env.npm_package_config_myPort || 8080;
// import morgan from 'morgan/index';
console.log('port', port);
// console.log('process.env', process.env);
// const morgan = require('morgan');
// const { Translate } = require('@google-cloud/translate').v2;

// Instantiates a client
// const translate = new Translate({projectId: 'my-first-test-project-262101', key:'AIzaSyBfU7Of0dMeZ1P263cLeuzuKFKHql2hJAc'});
// const fetch = require('node-fetch');

const func1 = (req, res) => {
    // const msg = req.query.msg || 'Hello world';
    // const lang = req.query.lang || 'es';
    res.status(200)
        .send({
            all: 'ss'
        });
        // console.log('translate', translate);
    // translate.translate(msg, lang, (err, translation) => {
    //     if (err) {
    //         res.status(500)
    //             .send(err);
    //     } else {
    //         res.status(200)
    //             .send(translation);
    //     }
    //     // translation;
    // });


    // return res.status(200)
    //     .json({
    //         lol: 'aol',
    //         port
    //     });
    // return fetch('https://api.github.com/users/yurikrupnik')
    //     .then((response) => {
    //         return res.status(200).json(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
};

// exports.func1 = func1;
export default {
    func1
};

// function(req, res) => {
//     function: res.status(200).json({
//         message: 'ok'
//     })
// }
