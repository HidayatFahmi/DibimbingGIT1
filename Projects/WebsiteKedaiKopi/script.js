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
})

