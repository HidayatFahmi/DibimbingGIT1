document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener("resize",function(){
        document.body.style.backgroundColor = `rgb(150,140,${this.window.innerWidth/1485*255})`;
    })
})