const contacts = require('./contacts');

const main = async()  => {
    const name = await contacts.tulisPertanyaan('Masukkan nama Anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email Anda : '); 
    const no_hp = await contacts.tulisPertanyaan('Masukkan no HP Anda : ');

    contacts.simpanContact(name, email, no_hp);
}

main();