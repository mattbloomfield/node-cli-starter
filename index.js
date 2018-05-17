#!/usr/bin/env node

var program = require('commander');
var co = require('co');
var prompt = require('co-prompt');
var chalk = require('chalk');
var worker = require('./worker');

program
    .arguments('<action>')
    .option('-f, --force <force>', 'Use this to force the command')
    .action(function (action) {
        co(function* () {
            if (action.force) {
                console.log(chalk.bgWhite('I will use force!'));
            }
            console.log(chalk.magenta('Welcome to the Node CLI Starter! Below you will be presented with a list of commands\n'));
            var type = yield prompt(chalk.bold.cyan('How would you like to proceed?\n\nChoose from the following: `delete` `create`\n\n'));
            if (type === 'create') {
                console.log(chalk.green('Creating a user profile...'));
                worker.createProfile();
            } else if (type === 'delete') {
                console.log(chalk.yellow('Deleting user profile...'));
                worker.deleteProfile();
            } else {
                console.log(chalk.bold.red('Response not understood. Terminating!'));
                process.exit(1);
            }

        });
    })
    .parse(process.argv);

//////////////////////////////////////////////////////////
/*                                                      */
/* Thanks to https://developer.atlassian.com/blog/2015/11/scripting-with-node/ */
/* for the idea and help to get started                 */
/*                                                      */
//////////////////////////////////////////////////////////