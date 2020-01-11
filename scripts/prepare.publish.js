#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);
// const spawn = require('child_process').spawn;
// const fork = require('child_process').fork;

// console.log('process.argv', process.argv);

// async function runCommand(v) {
//     const omg = await exec(`npx lerna run --scope=${v.name} --stream  test`);
//     console.log('omg', omg);
// }

async function createFile() {
    // const { stdout } = await exec('npx lerna changed -a --json').catch((error) => {
    //     return error;
    //     process.exitCode = 1;
    // });
    //
    // const modules = JSON.parse(stdout)
    //     .filter((m) => m.private);
    //
    // fs.writeFile(path.join(process.cwd(), 'private-to-publish.json'), JSON.stringify(modules), 'utf8',
    //     (error) => {
    //         if (error) {
    //             console.log('Failed to write json'); // eslint-disable-line
    //         } else {
    //             console.log('Created private-to-publish.json file'); // eslint-disable-line
    //         }
    //     });
    try {
        const { stdout } = await exec('npx lerna changed -a --json');
        const modules = JSON.parse(stdout)
            .filter((m) => m.private);

        fs.writeFile(path.join(process.cwd(), 'private-to-publish.json'), JSON.stringify(modules), 'utf8',
            (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                } else {
                    console.log('Created private-to-publish.json file'); // eslint-disable-line
                }
            });
    } catch (e) {
        process.exitCode = 1;
    }
}

createFile();
