const hamburgerMenu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click",function(){
    navbarNav.classList.toggle("active");
})

// klik diluar side bar unutk menghilangkan nav
document.addEventListener("click",function(e){
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove("active");
    }
    if(!searchButton.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove("active");
    }
    if(!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove("active");
    }
})



// toogle class active untuk search form

const searchBox = document.querySelector("#search-box");
const searchForm = document.querySelector(".search-form");
const searchButton = document.querySelector("#search-button");

searchButton.onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
}


// toogle class active untuk shopping-cart 
const shoppingCartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
}



// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
}

document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
}

// klik diluar modal 
window.onclick = (e) => {
    if(e.target === itemDetailModal){
        itemDetailModal.style.display = "none"
        e.preventDefault();
    }
}