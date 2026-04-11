// const nama = "WKWKWK";
// console.log(`hello ${nama}`);

// const cetakNama = (nami) => `Hi, nama saya ${nami}`;
// console.log(cetakNama('Kimi Wa Petto'));


// console.log(this.window);

// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module 
// const PI = require('./coba'); // local module 
const coba = require('./coba'); 
// console.log(coba);
// const moment = require('moment'); // third party module / npm module / node_modules

// console.log('Ini index.js');

const mhs = coba.mahasiswa
console.log(mhs.cetakMhs());


console.log(coba.cetakNama('Juned'), coba.PI, new coba.Orang());

// console.log(mhs.cetakNama);