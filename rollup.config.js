import path from 'path';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import kebabCase from 'lodash/kebabCase';
// import reduce from 'lodash/reduce';
import external from 'rollup-plugin-peer-deps-external';

const cwd = process.cwd();

const json = require(path.resolve(cwd, './package')); // eslint-disable-line

// const filter = reduce(
//     Object.assign({}, json.peerDependencies, json.dependencies, json.devDependencies),
//     (acc, val, key) => acc.concat(key), []
// ).concat([
//     '@material-ui/core/Button'
// ]);

const cjs = 'index.ejs.js';
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
            }),
            resolve({
                extensions: ['.mjs', '.js', '.jsx', '.json'],
            }),
            sass({}),
            external(),
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
        // external: filter
    };
}

const defaultModule = {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/cjs/main.js',
            format: 'cjs'
        },
        {
            file: 'dist/esm/main.js',
            format: 'esm'
        },
        {
            file: 'dist/umd/main.js',
            format: 'umd',
            name: json.name
        }
    ],
    plugins: [
        babel({
            rootMode: 'upward',
        }),
        resolve({
            // modulesOnly: true, // Default: false
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        commonjs({
            // namedExports: {
            //     'react-dom/server': ['renderToString']
            // }
        }),
        external(),
        sass({
            // insert: true
        }),
    ],
    // external: filter,
};

export default json.name !== '@krupnik/components' ? defaultModule : [
    defaultModule,
    createRollupOutput('BaseButton'),
    createRollupOutput('PillButton'),
    createRollupOutput('ButtonGroup'),
    createRollupOutput('DataGraph')
];
