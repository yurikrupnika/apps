import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import generatePackageJson from 'rollup-plugin-generate-package-json';
// import kebabCase from 'lodash/kebabCase';
import reduce from 'lodash/reduce';
import external from 'rollup-plugin-peer-deps-external';
// import css from 'rollup-plugin-css-only';
// import css from '@modular-css/rollup';
// import sass from 'rollup-plugin-sass';
// import postcss from 'postcss';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const filter = reduce(
    Object.assign({}, json.peerDependencies, json.dependencies, json.devDependencies),
    (acc, val, key) => acc.concat(key), []
).concat([
    '@material-ui/styles',
    '@material-ui/core',
    '@material-ui/core/Button'
]);

console.log('filter', filter); // eslint-disable-line

const globals = {
    react: 'React',
    'prop-types': 'PropTypes',

};

const defaultModule = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs',
            globals
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm',
            globals
        },
        {
            file: 'dist/umd/index.js',
            format: 'umd',
            globals,
            name: json.name
        }
    ],
    plugins: [
        postcss({
            // extract: true,
            minimize: true,
            modules: {
                // generateScopedName: '[hash:base64:5]',
            },
            plugins: [autoprefixer()],
            // writeDefinitions: true,
        }),
        // css(),
        babel({
            // rootMode: 'upward',
        }),
        resolve({
            // modulesOnly: true, // Default: false
            extensions: ['.mjs', '.js', '.jsx', '.json', '.css', '.scss'],
        }),
        commonjs({
            // namedExports: {
            //     'react-dom/server': ['renderToString']
            // }
        }),
        external(),
        // css({
        //     modules: true
        // }),
        // sass({
        //     output: 'bundle.css',
        // // //     // processor: c => postcss({
        // // //     //     modules: true,
        // // //     //     plugins: [autoprefixer]
        // // //     // })
        // // //     //     .process(c)
        // // //     //     .then(result => result.css),
        //     insert: true,
        // //     modules: true,
        // //     output: true,
        // // //     // output: 'bundle.css',
        // }),
    ],
    external: filter,
};

export default defaultModule;
