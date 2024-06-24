// element.innerHTML
const judul = document.getElementById('judul');
judul.innerHTML = "<em>Fahmi Hidayat</em>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<div><p>Hola Hidayat</p></div>"

// element.style.<property>
// const hola = document.querySelector("section#a div p");
// hola.style.backgroundColor = "salmon"

// element.setAttribute(), get, remove
const p4 = document.querySelector("section#b p");
p4.setAttribute("name","fahmi");
p4.getAttribute("name");
p4.removeAttribute("name");

// element.a
const p2 = document.querySelector(".p2");
// p2.setAttribute("class","label");

// element.classList.add();
p2.classList.add("list")

// element.classList.remove();
p2.classList.remove("p2");

// element.classList.toggle();
p2.classList.toggle("label");
// p2.classList.toggle("label");
p2.classList.toggle("aqua");

const red1 = document.querySelector(".label");
red1.style.backgroundColor = "red";

// element.classList.item();
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");

// element.classList.contains();
p2.classList.contains("dua");

// element.classList.replace();
p2.classList.replace("tiga","seratus");