const dropDownButton = document.querySelector(".film button");
const filmDropDown = document.querySelector(".drop-down ul");

dropDownButton.addEventListener("click", function(){
    filmDropDown.classList.toggle("show");
})