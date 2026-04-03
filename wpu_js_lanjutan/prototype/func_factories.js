
// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// selamatPagi("Jono");
// selamatSiang("Maryati");
// selamatMalam("Sonia Kusuma");


// let add = (function () {
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();

// // let a = add();

// counter = 100;

// console.log(add());

// console.log(add());

// console.log(add());

// //arrow function 
// let tampilPesan = (nama) => {
//     alert(`halo ` + nama);
// }

// //tampilPesan('Mayang');

// const tampilNama2 = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama2('Jono', 'Pagi'));



// let mahasiswa  = ['Jono', 'Maryati', 'Sonia'];

// // let jumlahHuruf = mahasiswa.map(function (nama) {
// //     return nama.length;
// // });

// // let jumlahHuruf = mahasiswa.map(nama => nama.length);
// // console.log(jumlahHuruf);

// //return dalam jumlah objek not array 
// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);

