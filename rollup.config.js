import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import reduce from 'lodash/reduce';
import external from 'rollup-plugin-peer-deps-external';

const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const filter = reduce(
    Object.assign({}, json.peerDependencies, json.dependencies, json.devDependencies),
    (acc, val, key) => acc.concat(key), []
);

const defaultModule = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/cjs/index.js',
            format: 'cjs'
        },
        {
            file: 'dist/esm/index.js',
            format: 'esm'
        },
        {
            file: 'dist/umd/index.js',
            format: 'umd',
            name: json.name
        }
    ],
    plugins: [
        babel({
            rootMode: 'upward',
        }),
        resolve({
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        commonjs({}),
        external(),
    ],
    external: filter,
};

export default defaultModule;
