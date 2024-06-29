const heroImg = document.querySelector(".hero img");
const container = document.querySelector(".container");
const thumbImgs = document.querySelectorAll(".thumbnail img");



thumbImgs.forEach(function(thumbImg){
    thumbImg.addEventListener("click",function(e){
        const sumber = e.target.src;
        heroImg.setAttribute("src",sumber);
        heroImg.classList.add("fade")
        
        setTimeout(function(){
            heroImg.classList.remove("fade")
        },300)

        thumbImgs.forEach(function(thumbImg){
            thumbImg.className = "thumb";
        })

        e.target.classList.add("active");
    })
})

