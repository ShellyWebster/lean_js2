console.log('Async JS');

setTimeout(() => {
    console.log('DUA');
}, 5000);

console.log('Tiga');

//callback 
//syncronous callback 
// function halo (nama) {
//     alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama : ');
//     callback(nama);
// }

// // tampilkanPesan(halo);


// tampilkanPesan(nama => alert(`Halooo, ${nama}`));


// const mhs = [
//     {
//         "nama" : "Sandhika",
//         "nrp": "11010323",
//         "email" : "yoyo@gmail.cokm",
//         "jurusan" : "Teknik A",
//         "idDosenWali" : 1
//     },
//     {
//         "nama" : "Radit Sandhika",
//         "nrp": "11010323",
//         "email" : "2yoyo@gmail.cokm",
//         "jurusan" : "Teknik B",
//         "idDosenWali" : 2
//     },
//     {
//         "nama" : "Maman Sandhika",
//         "nrp": "11010323",
//         "email" : "3yoyo@gmail.cokm",
//         "jurusan" : "Teknik C",
//         "idDosenWali" : 3
//     }
// ]

// console.log('mulai');
// // high order function 
// mhs.forEach(m =>  {

//     for (let i = 0; i< 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)

// }

// );
// console.log('selesai');



// asynchronous callback 
// function getDataMahasiswa(url, success, error ) {
//     let xhr = new XMLHttpRequest();
    
//     xhr.onreadystatechange = function() {
//         if( xhr.readyState === 4) { // ready  
//             if(xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         } 
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// // getDataMahasiswa('data/mahasiswa1.json', success, error);
// console.log('x mulai');
// getDataMahasiswa('data/mahasiswa.json', (results) => {
//     console.log('success!');
//     // console.log(JSON.parse(results));
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {
//     console.log('ada yg error');
// });

// console.log('x selesai');


//JQUERY - callback
// console.log('jq maulai');
// $.ajax({
//     url: 'data/mahasiswa.json',
//     success: (mhs) => {
//         console.log(mhs);
//         mhs.forEach(m => console.log(m.nama));
//     },
//     error: (e) => {
//         console.error(e.responseText);
//     }
// });

// console.log('jq selesai');


//PROMISES 
// $.ajax({
//     url: 'https://www.omdbapi.com/?apikey=640e288c&s=avengers',
//     success: (mo) => {
//         console.log(mo);
//         //mo.forEach(m => console.log(m.nama));

//     }, error: (e) => {
//         console.error(e.responseText);
//     }
// })

// fetch('https://www.omdbapi.com/?apikey=640e288c&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response)); 

// prmise = janji
// states : pending, fulfilled, rejected 
// callback (resolve / reject / finally)
// aksi (then / catch ) 

// contoh 
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji telah ditepati!');
//     }else {
//         reject('Ingkar janji..');
//     }
// });

// console.log(janji1); 

// //promise all 
// const film = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Joss Whedon',
//             pemeran: 'Robert Downey Jr'
//         }]);
//     }, 2000);
// });

// const cuaca = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             kota: 'Jakarta',
//             temp: 33,
//             kondisi: 'Cerah Berawan'
//         }]);
//     }, 500);
// });

// // film.then(m => console.log(m));
// // cuaca.then(m => console.log(m)); 
// Promise.all([film, cuaca])
//     .then(m => {
//         const [film, cuaca] = m;
//         console.log(film);
//         console.log(cuaca);
//     });



