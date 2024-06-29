// prevent default

// close = document.querySelectorAll(".close");

// close.forEach(function(x){
//     x.addEventListener("click",function(e){
//         e.target.parentElement.style.display = "none";
//         e.preventDefault();
//         e.stopPropagation();
//     })
// })

// const cards = document.querySelectorAll('.card');

// cards.forEach(function(card){
//     card.addEventListener("click",function(e){
//         alert("OK")
//     })
// })




const container = document.querySelector(".container");

container.addEventListener("click",function(e){
    // console.log(e.target);
    if(e.target.className == "close");
    e.target.parentElement.style.display = "none";
    e.preventDefault();
})