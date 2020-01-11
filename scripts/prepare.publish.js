#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');
const { execFile, spawn } = require('child_process');
const exec = util.promisify(require('child_process').exec);
// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//     if (error) {
//         throw error;
//     }
//     console.log('stdout', stdout);
// });
//
// child.on('message', (message) => {
//     console.log('message', message);
// });
// child.on('exit', (exit) => {
//     console.log('exit', exit);
// });

async function createFile() {
    try {
        const { stdout } = await exec('npx lerna changed -a --json');
        // const modules = JSON.parse(stdout)
        //     .filter((m) => m.private);

        const command = JSON.parse(stdout)
            .reduce((acc, next, i, list) => {
                // if (next.private) {
                    return `${acc || 'npx lerna run'} --scope ${next.name} ${i === list.length - 1 ? 'publish\n' : ''}`;
                // }
                // return acc;
            }, '');

        console.log('command,', command);
        fs.writeFile(path.join(process.cwd(), 'publish-command.text'),
            '', 'utf8',
            async (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                    process.exitCode = 1;
                } else {
                    console.log('Created private-to-publish.json file'); // eslint-disable-line
                    // const a = await exec('npx lerna changed -a --json');
                    // console.log('a', a);
                    process.exitCode = 0;
                }
            });
    } catch (e) {
        console.error('error accured with npm lerna changed');
        process.exitCode = 0;
    }
}


async function readFile() {
    fs.readFile(path.join(process.cwd(), 'publish-command.text'), 'utf8', (error, d) => {
        if (error) {
            console.log('e', error);
        }
        console.log('d', d);
    });
}

async function build() {
    console.log('building');
    const fd = await exec('npx lerna run --since --parallel build', { shell: true });
    // console.log(fd);
}

async function control() {
    await createFile();
    // await build();
    // await readFile();
}

control();
