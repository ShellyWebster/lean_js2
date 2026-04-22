// Core Modules
// File System 
const fs = require('fs');

// console.log(fs);

// menuliskan string ke file secara synchronous

//fs.writeFileSync('test.txt', 'Hello world secaran synchonous v2');
// try {
//     fs.writeFileSync('data/test.txt', 'Hello world secaran synchonous v3');
// } catch (error) {
//     // console.log(error);
//     fs.writeFileSync('error.log', error.message);
// }

// menulisan stirng ke file secara asynchronous
// fs.writeFile('data/test.txt', 'Hello async', (e) => {
//     console.log(e);
// });

// memabaca file 
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// // membaca file secara asynchronous
// fs.readFile('data/test.txt', 'utf-8', (e, data) => {
//     if (e) {
//         console.log(e);
//     } else {
//         console.log(data);
//     }
// });

// Readline 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nama = '';
let no_hp = '';

rl.question('Masukan nama anda : ', (name) => {
    
    rl.question('Masukan no hp anda : ', (no_hp) => {
        // nama = name;
        // no_hp = noHp;

        const contact = { name, no_hp};

        // console.log(`Nama : ${nama}, No HP : ${no_hp}`);

        const file  = fs.readFileSync('data/contacts.json', 'utf-8'); 
        const contacts = JSON.parse(file); 

        contacts.push(contact); 

        console.log(contacts);

        // write to file 
        // fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); 

        rl.close();
    });
});

