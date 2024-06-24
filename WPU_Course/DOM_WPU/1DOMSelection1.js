// // document.getElementById()
// const judul = document.getElementById("judul");
// judul.style.color = "aqua"
// judul.style.backgroundColor = "grey";
// judul.innerHTML = "Fahmi Hidayat"

// // document.getElementsByTagName()
// const paragraf = document.getElementsByTagName('p')
// const paragrafArray = Array.from(paragraf);

// paragrafArray.forEach((para) => {
//     para.style.backgroundColor = "green";
// })

// for(let i=0;i<paragraf.length;i++){
//     paragraf[i].style.backgroundColor = "lightskyblue"
// }

// const h1 = document.getElementsByTagName('h1');
// h1[0].style.backgroundColor = "salmon";

// // document.getElementsByClassName()
// const p1 = document.getElementsByClassName("p1");
// p1[0].innerHTML = "ini diubah dari javascript"

// // document.querySelector()
// const p4 = document.querySelector("#b p");
// p4.style.backgroundColor = "yellow"

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = "pink"

// const pPertama = document.querySelector("p");
// pPertama.style.backgroundColor = "red"

// // document.querySelectorAll();
// const p = document.querySelectorAll("p");

// p.forEach((paragraf) => {
//     paragraf.style.backgroundColor = "purple";
// })

const p4 = document.querySelectorAll('p');
p4[3].style.color = "pink"

const sectionA = document.getElementById('a');
const p3 = sectionA.getElementsByClassName("p3")[0];
p3.style.backgroundColor = "salmon"