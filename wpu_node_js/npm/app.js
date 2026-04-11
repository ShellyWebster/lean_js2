import validator from 'validator';
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(validator.isEmail('nugelo@gmail.com'));

console.log(validator.isMobilePhone('081234569', 'id-ID')); 

console.log(validator.isNumeric('123'));

let zz = chalk.red('Hello') + ' ' + chalk.green('World');
console.log(zz);

// console.log(); 
