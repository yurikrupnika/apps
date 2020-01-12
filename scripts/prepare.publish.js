#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

async function createFile() {
    try {
        const { stdout } = await exec('npx lerna changed -a --json');
        const command = JSON.parse(stdout)
            .reduce((acc, next, i, list) => {
                return `${acc || 'npx lerna run'} --scope ${next.name} ${i === list.length - 1 ? 'deploy' : ''}`;
            }, '');

        console.log('command', command);
        fs.writeFile(path.join(process.cwd(), 'publish-command.text'),
            command, 'utf8',
            async (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                    process.exitCode = 1;
                } else {
                    console.log('Created private-to-publish.json file'); // eslint-disable-line
                    process.exitCode = 0;
                }
            });
    } catch (e) {
        console.error('error accured with npm lerna changed');
        // console.log('writing empty file');
        // fs.access(path.join(process.cwd(), 'publish-command.text'), fs.F_OK, (error, a) => {
        //     if (error) {
        //         console.log('no file found');
        //     } else {
        //         console.log('file found and will be removed');
        //         fs.unlink(path.join(process.cwd(), 'publish-command.text'), (err) => {
        //             if (err) {
        //                 console.log('failed to removed file');
        //             } else {
        //                 console.log('removed file succefully');
        //             }
        //         });
        //     }
        // });
        fs.writeFile(path.join(process.cwd(), 'publish-command.text'),
            '', 'utf8',
            async (error) => {
                if (error) {
                    console.log('Failed to write json'); // eslint-disable-line
                    process.exitCode = 1;
                } else {
                    console.log('Created private-to-publish.json file'); // eslint-disable-line
                    process.exitCode = 0;
                }
            });
        // process.exitCode = 0;
    }
}


async function control() {
    await createFile();
    // await build();
    // fs.writeFile(path.join(process.cwd(), 'publish-command.text'),
    //     '', 'utf8',
    //     async (error) => {
    //         if (error) {
    //             console.log('Failed to write json'); // eslint-disable-line
    //             process.exitCode = 1;
    //         } else {
    //             console.log('Created private-to-publish.json file'); // eslint-disable-line
    //             process.exitCode = 0;
    //         }
    //     });
    // await readFile();
}

control();
