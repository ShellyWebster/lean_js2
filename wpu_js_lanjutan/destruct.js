// const coba = ['satu', 'dua', 'tiga'];

// const [a, b, c] = coba;
// console.log(b);

// console.log(c);

// //Destructuring array 
// const perkenalan = ['Halo', 'nama', 'saya', 'Gorila'];

// const [salam, , dua, nama] = perkenalan;

// // swap items 
// let aa = 1;
// let bb = 2;
// console.log(aa);
// console.log(bb);
// [aa, bb] = [bb, aa];
// console.log(aa);
// console.log(bb);

// //return value pada funciton 
// function cobax() {
//     return [1, 2];
// }

// const ax = cobax();
// console.log(ax);
// const [a1, b2] = cobax();
// console.log(a1);

// // rest parameter 
// const [az, ...values] = [1, 2, 3, 4, 5];
// console.log(az);
// console.log(values);



//destructuring objek 
const mhs = {
    nama: 'Orialdi',
    umur: 35
}

const {nama, umur} = mhs;
console.log(nama);
// harus sama dengan properti nya 