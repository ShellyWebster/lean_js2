

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
// ambil semua elemen video 
// test ambil h3, //judul 
// ME WORKS !
/*
const judul = document.getElementsByTagName("h3")[0];
console.log(judul.innerHTML);

const list_li = document.querySelectorAll("ul li");
const li_lanjutan = [];
for (let i = 0; i < list_li.length; i++) {
    if(list_li[i].innerHTML.includes('JAVASCRIPT LANJUTAN')) {
        li_lanjutan.push(list_li[i]);
    }
}
// console.log(list_li);
console.log(li_lanjutan);


// pilih yg hanya 'JAVASCRIPT LANJUTAN' 

// ambil durasi masing2 video 
let grandTotalSeconds = 0;
for(let i=0; i<li_lanjutan.length; i++) {
    const time = li_lanjutan[i].getAttribute('data-duration');
    const [minutes, seconds] = time.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;
    grandTotalSeconds += totalSeconds;
    
    console.log(time);
}

// let jumlah_video = document.getElementsByTagName("span .jumlah");
let jumlah_video = document.querySelector('.jumlah-video');
jumlah_video.innerHTML = `${li_lanjutan.length} video`;

let total_durasi = document.querySelector('.total-durasi');
const hours = Math.floor(grandTotalSeconds / 3600);
const minutes = Math.floor((grandTotalSeconds % 3600) / 60);
const seconds = grandTotalSeconds % 60;

total_durasi.innerHTML = `${hours}:${minutes}:${seconds}`;
*/


// ubah durasi menjadi int, ubah menit menjadi detik 

// jumlah semua detik

// konversi ke jam: menit : detik 


// SIMPAN DI DOM 

// pak dhika 
const videos = Array.from(document.querySelectorAll('[data-duration'));
console.log(videos);

let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
    .map(item => item.dataset.duration)
    
    //ubah durasi menjadi int
    .map(waktu => {
        //pak dika 
        const parts = waktu.split(':').map(part => parseFloat(part));
        // me 
        // const parts = waktu.split(':').map(Number);
        return (parts[0] * 60) + parts[1];
    })

    .reduce((total, detik) => total + detik)
    ;

// ubah format 
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUT')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;

console.log(jsLanjut);