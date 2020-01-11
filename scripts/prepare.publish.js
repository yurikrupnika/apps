#!/usr/bin/env node
const fs = require('fs');
const util = require('util');
const path = require('path');
const exec = util.promisify(require('child_process').exec);

async function createFile() {
    try {
        const { stdout } = await exec('npx lerna changed -a --json');
        const modules = JSON.parse(stdout)
            .filter((m) => m.private);

        fs.writeFile(path.join(process.cwd(), 'private-to-publish.json'), JSON.stringify(modules), 'utf8',
            (error) => {
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
        process.exitCode = 2;
    }
}

createFile();
