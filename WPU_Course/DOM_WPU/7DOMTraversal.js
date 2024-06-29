const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

// for(let a=0;a<close.length;a++){
//     close[a].addEventListener("click",function(e){
//         // card[a].style.display = "none"; 
//         // close[a].parentElement.style.display = "none";
//         e.target.parentElement.style.display = "none";
//     })
// }

close.forEach(function(close){
    close.addEventListener("click",function(e){
        e.target.parentElemnt.style.display = "none";
    })
})

const nama = document.querySelector(".nama");
console.log(nama);
console.log("parentNode = ",nama.parentNode);
console.log("parentElement = ",nama.parentElement);
console.log("grandParent",nama.parentElement.parentElement);
console.log("nextSibling",nama.nextSibling);
console.log("nextElementSibling",nama.nextElementSibling);