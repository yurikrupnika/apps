import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sass from 'rollup-plugin-sass';

export default {
    input: 'src/client.jsx',
    context: 'null',
    output: [
        // {
        //     file: 'dist/cjs/main.js',
        //     format: 'cjs'
        // },
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
            extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.css'],
        }),
        // commonjs({
        //     include: [
        //         'node_modules/**'
        //     ],
        //     exclude: [
        //         'node_modules/process-es6/**'
        //     ],
        //     namedExports: {
        //         'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        //         'node_modules/react-dom/index.js': ['render']
        //     }
        // }),
        sass({
            // insert: true
        }),
    ]
};
