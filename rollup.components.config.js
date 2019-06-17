import reduce from 'lodash/reduce';
import path from 'path';
import sass from 'rollup-plugin-sass';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

// import pkg from './package.json';
const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line
const name = process.cwd();
const input = path.join(name, 'src/index.js');

const filter = reduce(
    Object.assign({}, json.peerDependencies, json.dependencies),
    (acc, val, key) => acc.concat(key), []
);

const fileName = 'index.js';
const plugins = [
    babel({
        rootMode: 'upward',
    }),
    resolve({
        extensions: ['.mjs', '.js', '.jsx', '.json'],
    }),
    sass({}),
];

const globals = {
    react: 'React',
    'prop-types': 'PropTypes',

};

export default [
    // CJS
    {
        input,
        output: {
            file: path.join(name, 'dist', 'cjs', `${fileName}`),
            format: 'cjs',
            globals
        },
        external: filter,
        plugins
    },
    // UMD
    {
        input,
        output: {
            file: path.join(name, 'dist', 'umd', `${fileName}`),
            format: 'umd',
            name,
            globals
        },
        external: filter,
        plugins
    },
    // ES
    {
        input,
        output: {
            file: path.join(name, 'dist', 'esm', `${fileName}`),
            format: 'esm',
            globals
        },
        external: filter,
        plugins
    }
];
