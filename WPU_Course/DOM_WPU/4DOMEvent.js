const p3 = document.querySelector(".p3");
const p2 = document.querySelector(".p2");
// p3.style.backgroundColor = "yellow"

function ubahWarnaP2(){
    p2.style.backgroundColor = "blue";
}
function ubahWarnaP3(){
    p3.style.backgroundColor = "lightgreen";
    p3.style.color = "white"
}

p2.addEventListener("mouseenter",ubahWarnaP2)
p2.addEventListener("mouseleave",function(){
    p2.style.backgroundColor = "yellow";
})
// p2.onclick = function(){
//     p2.style.color = "red";
// }

// cara2
const ul = document.querySelector("section#b ul");
const li4 = document.createElement("li");
const li5 = document.createElement("li");
li4.textContent = "item 4";
li5.textContent = "item 5";

// addEventListener
const p4 = document.querySelector("section#b p");
p4.addEventListener("click",function(){
    ul.append(li4);
})
p4.addEventListener("click",function(){
    ul.append(li5);
})

li4.addEventListener("dblclick",function(){
    li4.remove();
})
li5.addEventListener("dblclick",function(){
    li5.remove();
})

