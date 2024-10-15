import chalk from 'chalk';
import 'dotenv/config';

console.log(chalk.blueBright(`Hello ${process.env.MY_NAME1}`));
console.log(chalk.redBright(`Hello ${process.env.MY_NAME2}`));
console.log(chalk.gray(`Hello ${process.env.MY_NAME3}`));
console.log(chalk.whiteBright(`Hello ${process.env.MY_NAME4}`));