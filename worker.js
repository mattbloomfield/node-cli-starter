var chalk = require('chalk');

module.exports = {
    createProfile: function () {
        console.log(chalk.bold.green('Profile Created!'));
        process.exit();
    },
    deleteProfile: function () {
        console.log(chalk.bold.red('Profile Deleted!'));
        process.exit();
    }
}