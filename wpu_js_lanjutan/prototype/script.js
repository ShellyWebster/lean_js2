// cara untuk membaut objek 
// 1. Objek LIteral 
// let mahasiswa = {
//     nama: 'Jajang',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.info(`halo ${this.nama}, selamat makan ${porsi} porsi`);
//     }
// }

// const methodeMahasiswa = {
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.info(`halo ${this.nama}, selamat makan ${porsi} porsi`);
//     },

//     main: function(jam) {
//         this.energi = this.energi - jam;
//         console.info(`halo ${this.nama}, selamat bermain ${jam} jam`);
//     },

//     tidur: function(jam) {
//         this.energi = this.energi + jam * 2;
//         console.info(`halo ${this.nama}, selamat tidur ${jam} jam`);
//     }

// }

// // 2. function declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodeMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

    
//     return mahasiswa;
// }

// let juned = Mahasiswa('Juned', 11);



// 3. Constructor function 
// keyword new 
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan !`);
//     }

//     this.main = function(jam) {
//         this.energi = this.energi - jam;
//         console.log(`Halo ${this.nama}, selamat bermain !`);
//     }
// }

// let tatang = new Mahasiswa('Tatang', 20);


// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodeMahasiswa);
//     this.nama = nama;
//     this.energi = energi;    
//     // return mahasiswa;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama} , selamat berhami!`;
// }


// let sandi = new Mahasiswa('Sandi', 15);


// 4. Object.create 


// versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
// }

// let mamat = new Mahasiswa('Mamat', 10);
// console.info(mamat);
// mamat.makan(2);
// console.info(mamat);

// let angka = [1, 2, 3, 4, 5];
// console.info(angka.reverse());

// nama var = undefined 
// nama function = fn() 
// hoisting (menaikan bendera)

// window = global object 
// this = window 

// console.log(sayHello);

// var nama = 'Jajang';
// var umur = 33;

// function sayHello() {
//     return `Halo, nama saya ${nama}, umur saya ${umur} tahun.`;
// }

// execution phase 



// var nama = 'Jajang';
// var username = 'jajang123';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('priyodjatmiko'));


// function satu() {
//     var nama = 'Sandhika';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Erik';
// satu();
// dua('Doddy');
// console.log(nama);

/*
undefined
Sandhika
Erik
Erik
*/


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();





function init() {
    // let nama = 'Junaedi';

    // function tampilNama(nama) {
    //     console.log(nama);
    // }

    // //tampilNama();
    // return tampilNama;

    return function (nama) {
        console.log(nama);
    }
}

let panggilNama = init();
// console.log(panggilNama);
panggilNama('Maman Vandi');