const pBaru = document.createElement('p');
const textPBaru = document.createTextNode("Paragraf baru");
// simpan tulisan ke dalam tag 
pBaru.appendChild(textPBaru);
// simpan pbaru diakhir section
// ambil sectionnya
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru)

// insertbefore
const liBaru = document.createElement("li");
const teksLi = document.createTextNode("Item Baru");
liBaru.appendChild(teksLi);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2)

const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

const sectionB = document.getElementById("b")
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru dari JS");
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru,p4)

pBaru.style.backgroundColor = "aqua";
liBaru.style.backgroundColor = "aqua";