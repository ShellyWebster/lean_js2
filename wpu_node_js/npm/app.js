import validator from 'validator';
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));

console.log(validator.isEmail('nugelo@gmail.com'));

console.log(validator.isMobilePhone('081234569', 'id-ID')); 

console.log(validator.isNumeric('123'));

let zz = chalk.red('Hello') + ' ' + chalk.green('World');
console.log(zz);

console.log(chalk.italic.bgMagenta.white('Hello world HAAHAHAHAH!'));

// not working
// const pesan = chalk`Lorem ipsum {bgRed.black dolor sit} amet consectetur adipisicing elit. Voluptas, voluptate.`;
// console.log(pesan); 

console.log(`
CPU: ${chalk.magenta('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.white('70%')} 
`);

/*
npm instlal --save-dev nodemon
*/