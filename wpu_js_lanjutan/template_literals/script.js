// 1. HTML Fragment s
// const mhs = {
//     nama: 'Dimas',
//     umur: 33,
//     nrp: '043040023',
//     email: 'jojo@gmail.com',
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// document.body.innerHTML = el;

// 2. loooping 
// const mhs = [
//     {
//         nama: 'Juned',
//         email: 'tatang@gmail.com'
//     },
//     {
//         nama: 'Cup Juned',
//         email: 'tatang@gmail.com'
//     },
//     {
//         nama: 'A Juned',
//         email: 'tatang@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//         </ul>`).join('')} 
// </div>`; //join '' hilangkan koma


// 3. conditionals 
// ternary 
// const lagu = {
//     judul: 'In The End',
//     penyanyi: 'Linkin Park',
//         feat: 'Eminem'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// 4. nested 
const mhs = {
    nama: 'Juned',
    umur: 33,
    semester: 5,    
    mataKuliah: [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Mobile',
        'Pemrograman Web'
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>   
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
    </div>`;

document.body.innerHTML = el;

// Tagged templates 
const nama = 'Juned';
const umur = 33;

function coba(strings, ...values) {
    // let result = '';
    // strings.forEach((str, i) => {    
    //     result += `${str}${values[i] || ''}`;
    // });
    // return result;
    return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
}

