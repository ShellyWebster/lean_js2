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

// 2. function declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan !`);
    }
    return mahasiswa;
}

let juned = Mahasiswa('Juned', 11);



// 3. Constructor function 

// 4. Object.create 