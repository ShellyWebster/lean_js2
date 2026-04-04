
//  konsep this pada Arrow func 

// Constructor function 
// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const jak = new Mahasiswa();
// // console.log(jak);

// jak.sayHello();


// arrow function 

// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
    
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }






// const Mahasiswa = function() {
//     this.nama = 'Sandhika';
//     this.umur = 33;
    
//     this.sayHello = () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     // setInterval(function () {
//     //     console.log(this.umur++); //di luar, tidak ada jadi NaN
//     // }, 500);

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 1500);

// }

// const sandhika = new Mahasiswa();





const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        console.log(this);
        this.classList.toggle(dua);
    }, 600); 
});