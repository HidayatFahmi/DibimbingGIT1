const komentar = document.querySelector("textarea[name=comment]");
komentar.addEventListener("input", function(e){
    console.log(e.target.value);
})  