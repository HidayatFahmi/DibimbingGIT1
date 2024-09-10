document.addEventListener('DOMContentLoaded', function(){
    let selectedHero = {};
    let hero = [];
    let allSkill 

    
    setTimeout(() => {
        const heroes = document.querySelector('.select-hero .cards');
        hero = Array.from(heroes.children).slice(1);

        const skill = document.querySelector(".skills .skill");


        console.log(hero);

        hero.forEach(item => {
            item.addEventListener("click", function(e){
                const name = item.querySelector(".name").textContent;
                const image = item.querySelector("img").src;
                selectedHero = {name, image};
                
                localStorage.setItem("selectedHero", JSON.stringify(selectedHero));
                console.log(`selectedHero = ${selectedHero.name}`);
            })
        }) 

    },500)
})