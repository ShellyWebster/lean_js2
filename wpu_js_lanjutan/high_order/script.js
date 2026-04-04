

let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}

console.log(total);


const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// using log for : 
// const angka_filter = [];

// console.log(angka);

// for(let i=0; i<angka.length; i++) {
//     console.log(`ini item ke ${i+1} : ${angka[i]} `);
//     if(angka[i] >= 3) {
//         angka_filter.push(angka[i]);
//     }    
// }

// console.log(angka_filter);


// using filter 
// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// const newAngkaSingkat = angka.filter(a => a >= 3);

// console.log(`filtered : ${newAngka}`);
// console.log(newAngkaSingkat);

// const newAngkaKali2 = angka.map(a => a * 2);
// console.log(`Angka Kali 2: ${newAngkaKali2}`);


// reduce 
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 100);
// console.log(newAngka);

// // Method chaining 
// // cari angka > 5 
// // kalikan 3 
// // jumlahkan 
// const hasil = angka.filter(a => a > 5) // 8, 9, 9
//     .map(a => a * 3) // 24, 27, 27
//     .map(a => a / 2) // dibagi 2 dulu 
//     .reduce((acc, curr) => acc + curr, 0);
// console.log(`cek hasil ${hasil}`);


// latihan 