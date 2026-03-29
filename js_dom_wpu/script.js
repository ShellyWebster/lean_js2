/*
// console.info("coba nulis via log");
// console.log(document);

// DOM Selection 
// getElementById 
const judul = document.getElementById("judul");
// .style.color = "red";
judul.style.color = "blue";
judul.style.backgroundColor = "pink"
judul.innerHTML = "Nugelo Budug";

const p = document.getElementsByTagName("p");
console.log(p);
for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = "lightyellow";
    p[i].style.fontSize = "20px";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "10px";

const p1 = document.getElementsByClassName("p1")[0];
p1.style.color = "red";

// docment.querySelector() 
const p4 = document.querySelector("#b p");
p4.style.color = "green";
p4.style.fontSize = "10px";

const li3 = document.querySelector("section#b ul li:nth-child(3)");
li3.style.backgroundColor = "orange";

const p_yo = document.querySelectorAll("p");
for (let i = 0; i < p_yo.length; i++) {
    p_yo[i].style.fontFamily = "Comic Sans MS";
}


const sectionB = document.getElementById('b');
const p4_ = sectionB.querySelector('p');
p4_.style.backgroundColor = "#ffccff";
*/

//DOM Manipulation
/*
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Nugelo Budug</em>";
judul.style.color = "blue";
judul.style.backgroundColor = "#ffddff";

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "Hilang semua, diganti";
// sectionA.style.backgroundColor = "yellow";

const a = document.querySelector('a');
a.setAttribute('href', "http://google.com");

const atr_val = a.getAttribute('href');
console.info(atr_val);

a.removeAttribute('href');

//cari element yg class nya p2
const p2 = document.querySelector('.p2');
// p2.setAttribute('class', 'label'); //menimpa
p2.classList.add('label');

p2.classList.remove('label');

p2.classList.toggle('label');
*/

//DOM Manipulation v2
/*
// buat element baru 
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Baru');
// simpan tlisan ke dalma paragraf
pBaru.appendChild(textPBaru);

// simpan ke section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


//replace 
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p'); //menemukan p pertama di section B 

const h2Baru = document.createElement('h2');
// const textH2Baru = document.createTextNode('ini H2 BARU!');

h2Baru.innerHTML = "Nugelo Budug";

// h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);
*/

//event handler 
/*
const p3 = document.querySelector('.p3');

function ubahWarna() {
    p3.style.backgroundColor = 'lightblue';
    p2.style.backgroundColor = '#ffccff';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;


//const p4 = document.querySelector('.p4'); //wrong class p4 ga ada 
const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function() {
    // alert('ok');
    const ul = document.querySelector('section#b ul');

    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(textLiBaru);
    ul.appendChild(liBaru);
});
*/

const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.addEventListener('click', function() {
//     p3.style.backgroundColor = 'lightblue';
// });


p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
});


p3.addEventListener('mouseleave', function() {
    p3.style.backgroundColor = 'white';
});



p3.addEventListener('click', function(){
    p3.style.color = 'red';
});

