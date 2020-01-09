#!/usr/bin/env node
const util = require('util');
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
    const { stderr, stdin, stdout, stdio } = await exec('npx lerna changed -a --json');
    // console.log('stderr', stderr);
    // console.log('stdin', stdin);
    // console.log('stdout', stdout);
    // console.log('stdio', stdio);
    const modules = JSON.parse(stdout).filter((m) => m.private);

    // const names = JSON.parse(stdout).reduce((acc, next) => {
    //     return acc;
    // }, '');
    // console.log('modules', modules);
    modules.map(async (v) => {
        // console.log(v.name);
        if (v.name === '@krupnik/fe-webserver1') {

            // const omg = await exec(`npx lerna run --scope=${v.name} --stream  test`);
            // console.log(omg);
            // omg.on('exit', () => {
            //     console.log('exit');
            // });
            // const { stdouta, stderra } = await exec(`npx lerna run --scope=${v.name} --stream  test`);
            // console.log('stdouta', stdouta);
            // console.log('stderra', stderra);
        }
    });
}

createFile();
