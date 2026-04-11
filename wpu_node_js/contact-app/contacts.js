const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');

// Readline 
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

const dirPath = './data';

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';

if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

// const tulisPertanyaan = (pertanyaan) => {
//     return new Promise((resolve, reject) => {
//         rl.question(pertanyaan, (name) => {
//             resolve(name);
//         });
//     });
// };

const simpanContact = (name, email, no_hp) => {
    const contact = { name, email, no_hp};
    // const file  = fs.readFileSync('data/contacts.json', 'utf-8'); 
    // const contacts = JSON.parse(file); 
    const contacts = loadContact();


    // cek duplikat
    const duplikat = contacts.find((contact) => contact.name === name);

    if (duplikat) {
        console.log(chalk.red.inverse('Contact sudah ada!, gunakan nama lain!')); 
        // rl.close();
        return;
    }

    if(email) {
        if (!validator.isEmail(email)) {
            console.log(chalk.red.inverse('Email tidak valid!'));
            return;
        }
    }

    // cek no hp
    if (!validator.isMobilePhone(no_hp, 'id-ID')) {
        console.log(chalk.red.inverse('Nomor HP tidak valid!'));
        return;
    }

    contacts.push(contact); 

    console.log(contacts);

        // write to file 
        // fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); 

    console.log(chalk.green.inverse('Terima kasih sudah memasukan data!'));

    // rl.close();
}

const loadContact = () => {
    const file  = fs.readFileSync('data/contacts.json', 'utf-8'); 
    const contacts = JSON.parse(file);
    return contacts;
}

const listContact = () => {
    const contacts = loadContact();
    console.log(chalk.cyan.inverse('Daftar contact : '));
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.name} - ${contact.no_hp}`);
    });
}

// menampilkan detail sebuah contact
const detailContact = (name) => {
    const contacts = loadContact();
    const contact = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
    if (!contact) {
        console.log(chalk.red.inverse('Contact tidak ditemukan!'));
        return;
    }
    console.log(chalk.cyan.inverse('Detail Contact : '));
    console.log(`Nama: ${contact.name}`);
    console.log(`Email: ${contact.email}`);
    console.log(`No HP: ${contact.no_hp}`);
}

// menambah fitur delete contact
const deleteContact = (name) => {
    const contacts = loadContact();
    const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());
    if (contacts.length === newContacts.length) {
        console.log(chalk.red.inverse('Contact tidak ditemukan!'));
        return;
    }
    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts, null, 2));
    console.log(chalk.green.inverse('Contact berhasil dihapus!'));
}


module.exports = { simpanContact, listContact, detailContact, deleteContact };