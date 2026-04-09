
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

const getUser = (id, callback) => { 

    const time = id === 1 ? 3000 : 2000; 

    setTimeout(() => {
        const nama = id === 1 ? 'Jacob' : 'Nisa'; //ceritanya request ke API 
        callback({id , nama});
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const helo = 'Hello cuy';
console.log(helo);