/*
npm i yargs@16.2.0
*/
const { type } = require('node:os');
const yargs = require('yargs'); 
const contacts = require('./contacts');

// yargs.command('add', 'Menambahkan contact baru', () => {}, (argv) => {
//     console.log(argv.nama);
// });

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama:{
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string',
        },
        email:{
            describe: "Email",
            demandOption: false,
            type: 'string',
        },
        no_hp:{
            describe: "Nomor HP",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     no_hp: argv.no_hp,
        // }
        // console.log(contact);

        contacts.simpanContact(argv.nama, argv.email, argv.no_hp);
    }
}).demandCommand(); //harus ada perintahnya, kalau tidak ada perintahnya maka akan muncul pesan error


//menampilkan daftar semua nama & no hp contact yang ada
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua contact',
    handler(){
        contacts.listContact();
    }
});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama:{
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    }
});

//menghapus sebuah contact
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama:{
            describe: "Nama lengkap",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    }
});


yargs.parse();

// console.log(yargs.argv);


// console.log(process.argv[2]); 



// const contacts = require('./contacts');

// const main = async()  => {
//     const name = await contacts.tulisPertanyaan('Masukkan nama Anda : ');
//     const email = await contacts.tulisPertanyaan('Masukkan email Anda : '); 
//     const no_hp = await contacts.tulisPertanyaan('Masukkan no HP Anda : ');

//     contacts.simpanContact(name, email, no_hp);
// }

// main();