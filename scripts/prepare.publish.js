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
    // const child = fork('npx lerna changed -a --json', {env: process.env});
    // child.on('exit', (code) => {
    //     console.log('exit', code);
    // });
    // child.on('data', (code) => {
    //     console.log('exit', code);
    // });
    // child.on('error', (code) => {
    //     console.log('exit', code);
    // });
    const { stderr, stdout } = await exec('npx lerna changed -a --json');
    // console.log('stderr', stderr);
    // console.log('stdin', stdin);
    // console.log('stdout', stdout);
    // console.log('stdio', stdio);
    if (stderr) {
        console.log('stderr', stderr); // eslint-disable-line
        // console.log('stdout', stdout); // eslint-disable-line
    }
    const modules = JSON.parse(stdout)
        .filter((m) => m.private);

    // const names = JSON.parse(stdout).reduce((acc, next) => {
    //     return acc;
    // }, '');
    // console.log('modules', modules);
    if (modules.length) {
        fs.writeFile(path.join(process.cwd(), 'private-to-publish.json'), JSON.stringify(modules), 'utf8',
            (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                } else {
                    console.log('Created private-to-publish.json file'); // eslint-disable-line
                }
            });
        process.exit(0);
    } else {
        process.exit(0);
    }
    modules.map(async (v) => {
        // console.log(v.name);
        if (v.name === '@krupnik/fe-webserver1') {
            // const omg = await exec(`npx lerna run --scope=${v.name} --stream  test`);
            // console.log(omg);
            // omg.on('exit', () => {
            //     console.log('exit');
            // });
            // fs.createWriteStream();
            // const { stdouta, stderra } = await exec(`npx lerna run --scope=${v.name} --stream  test`);
            // console.log('stdouta', stdouta);
            // console.log('stderra', stderra);
        }
    });
    return 'yes';
}

createFile();
