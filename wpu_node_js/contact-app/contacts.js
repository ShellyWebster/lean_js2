const fs = require('fs');
// Readline 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dirPath = './data';

if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

const dataPath = './data/contacts.json';

if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (name) => {
            resolve(name);
        });
    });
};

const simpanContact = (name, email, no_hp) => {
    const contact = { name, email, no_hp};

    const file  = fs.readFileSync('data/contacts.json', 'utf-8'); 
    const contacts = JSON.parse(file); 

    contacts.push(contact); 

    console.log(contacts);

        // write to file 
        // fs.writeFileSync('data/contacts.json', JSON.stringify(contacts)); 

    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts, null, 2)); 

    console.log('Terima kasih sudah memasukan data!');

    rl.close();
}

module.exports = { tulisPertanyaan, simpanContact };