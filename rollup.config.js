import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import generatePackageJson from 'rollup-plugin-generate-package-json';
// import analyze from 'rollup-plugin-analyzer';
// import generatePackageJson from 'rollup-plugin-generate-package-json';
import kebabCase from 'lodash/kebabCase';
import reduce from 'lodash/reduce'; // eslint-disable-line

const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line

const filter = reduce(
    Object.assign({}, json.peerDependencies, json.dependencies),
    (acc, val, key) => acc.concat(key), []
).concat([
    '@material-ui/core/Button'
]);

const cjs = 'index.cjs.js';
const esm = 'index.esm.js';

function createRollupOutput(module) {
    return {
        input: `src/${module}/index.js`,
        output: [
            {
                file: `dist/${module}/${esm}`,
                format: 'esm'
            },
            {
                file: `dist/${module}/${cjs}`,
                format: 'cjs'
            }
        ],
        plugins: [
            babel({
                rootMode: 'upward',
                // modules: false,
                // loose: true
            }),
            resolve({
                // modulesOnly: true, // Default: false
                extensions: ['.mjs', '.js', '.jsx', '.json'],
            }),
            sass({
                // insert: true
            }),
            generatePackageJson({
                baseContents: {
                    name: kebabCase(module),
                    scripts: {},
                    description: '',
                    main: cjs,
                    module: esm,
                    dependencies: {},
                    private: true
                }
            })
        ],
        external: filter
    };
}
// console.log('filter', filter);

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/cjs/main.js',
                format: 'cjs'
            },
            {
                file: 'dist/esm/main.js',
                format: 'esm'
            }
        ],
        plugins: [
            babel({
                rootMode: 'upward',
                // modules: false,
                // plugins: ['@babel/plugin-transform-modules-commonjs']
            }),
            resolve({
                // modulesOnly: true, // Default: false
                extensions: ['.mjs', '.js', '.jsx', '.json'],
            }),
            sass({
                // insert: true
            }),
        ],
        external: filter,
    },
    createRollupOutput('BaseButton'), // fails todo real esm by component
    createRollupOutput('PillButton'),
    createRollupOutput('ButtonGroup'),
    createRollupOutput('DataGraph')
];
