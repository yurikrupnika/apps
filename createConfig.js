const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const fsPromises = fs.promises;
const lernaCommand = 'npx lerna ls --json -a';

async function deleteFile(file) {
    return fsPromises.access(file)
        .then(() => fsPromises.unlink(file))
        .then(() => console.log(chalk.red(`deleted ${file} file`)))
        .catch(() => console.error(chalk.red.bold(`cannot access ${file} file`)));
}

async function handleEnvCreation(modules) {
    const promises = modules.reduce((acc, next) => {
        const { location, name } = next;
        if (location.includes('functions')) {
            const promise = fsPromises
                .readFile(path.join(location, 'package.json'), 'utf8')
                .then((file) => {
                    const data = JSON.parse(file);
                    const command = `${name}-port=${data.config.port}${'\r\n'}`;
                    return fsPromises.appendFile('.env', command, 'utf8')
                        .then(() => name);
                });
            return acc.concat(promise);
        }
        return acc;
    }, []);

    return Promise.all(promises)
        .then((res) => {
            console.log(chalk.green('Created .env file')); // eslint-disable-line
            console.log(chalk.yellow('Included modules:', res.toString())); // eslint-disable-line
        })
        .catch((err) => {
            console.log(err); // eslint-disable-line
        });
}

async function createEnvFileForTestFunctions() {
    await deleteFile('.env');

    const { stdout, stderr } = await exec(lernaCommand);
    if (stderr) {
        // console.log('Command output', lernaCommand, stderr); // eslint-disable-line
    }
    const modules = JSON.parse(stdout);
    await handleEnvCreation(modules);
}

createEnvFileForTestFunctions();
