const heroImage = document.querySelector(".heroImage img");
console.log(heroImage.getAttribute("src"));

const thumbnails = document.querySelector(".thumbnails");
const thumbnailItems = thumbnails.children;
const thumbnailItemsArray = [...thumbnailItems]
// console.log(thumbnailItems);

thumbnailItemsArray.forEach(item => (
    item.addEventListener("click", function(e){
        heroImage.setAttribute("src",e.target.getAttribute("src"))
    })
))
