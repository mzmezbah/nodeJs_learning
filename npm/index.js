const chalk = require('chalk');

console.log(chalk.bold.yellow.bgGreen('hey, i am mezvah') + '\n');

console.log(chalk.blue('Hi,') + 'how '+ ' '+chalk.green.bgYellow('are ') + ' '+ chalk.italic.gray.bgGreen('you ?'));
