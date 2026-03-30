//const p3 = document.querySelector('.p3');


//const tUbahWarna = document.querySelector("#tUbahWarna"); //oke 
const tUbahWarna = document.getElementById("tUbahWarna");

// const body = document.getElementsByTagName('body')[0]; //oke

//p4.style.color = "green";
tUbahWarna.style.color = "blue";

tUbahWarna.onclick = function() {
    // alert('jalan cuy');
    // document.body.style.backgroundColor = 'lightgray';      
    // document.body.setAttribute('class', 'biru-muda');

    document.body.classList.toggle('biru-muda');
}

const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type','button');

// document.body.appendChild(tAcakWarna);
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    console.log(r);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

    tUbahWarna.style.color = `rgb(${b},${r},${g})`; 
});