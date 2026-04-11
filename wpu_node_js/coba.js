
// // syncrhonous

// const getUserSync = (id) => {
//     // let nama = '';
//     // if (id === 1) {
//     //     nama = 'Jacob';
//     // } else if (id === 2) {
//     //     nama = 'Nisa';
//     // }

//     const nama = id === 1 ? 'Jacob' : 'Nisa';
//     return { id, nama };
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Halo Dunia';
// console.log(halo);

// asyncrhonous

// const getUser = (id, callback) => { 

//     const time = id === 1 ? 3000 : 2000; 

//     setTimeout(() => {
//         const nama = id === 1 ? 'Jacob' : 'Nisa'; //ceritanya request ke API 
//         callback({id , nama});
//     }, time);
// };

// const userSatu = getUser(1, (hasil) => {
//     console.log(hasil);
// });

// const userDua = getUser(2, (hasil) => {
//     console.log(hasil);
// });

const helo = 'Hello cuy';
console.log(helo);

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama: 'Dody',
    umur: 20,
    cetakMhs() {
        return `halo nama saya ${this.nama}`;   
    }
}

class Orang {
    constructor() {
        console.log('Objek orang telah dibuat!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     orang: Orang
// }

// ES 6
module.exports = {
    cetakNama,
    PI,
    mahasiswa, 
    Orang
}