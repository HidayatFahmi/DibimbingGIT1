document.addEventListener("alpine:init", () => {
    localStorage.removeItem("selected-hero");
    Alpine.store("cart", {
        characters : [
            {id : 1, name : 'Harry Potter', image : "char1.png"},
            {id : 2, name : "Hermione Granger", image : "char2.png"},
            {id : 3, name : "Ron Weasley", image : "char3.png"},
            {id : 4, name : "Draco Malfoy", image : "char4.png"},
            {id : 5, name : "Severus Snape", image : "char5.png"},
            {id : 6, name : "Luna Lovegood", image : "char6.png"},
            {id : 7, name : "Cedric Diggory", image : "char7.png"},
            {id : 8, name : "Dumbledore", image : "char8.png"},
            {id : 9, name : "Neville Longbottom", image : "char9.png"},
        ],

        skills : [
            {id : 1, name : "Expectro patronum", image : "skill1.png",alias : "scissor"},
            {id : 2, name : "Expelliarmus", image : "skill2.png",alias : "scissor"},
            {id : 3, name : "Lumos", image : "skill3.png",alias : "scissor"},
            {id : 4, name : "Avada Kadavra", image : "skill4.png",alias : "rock"},
            {id : 5, name : "Crucio", image : "skill5.png",alias : "rock"},
            {id : 6, name : "Imperio", image : "skill6.png",alias : "rock"},
            {id : 7, name : "Stupefy", image : "skill7.png",alias : "papper"},
            {id : 8, name : "Protego", image : "skill8.png",alias : "papper"},
            {id : 9, name : "repero", image : "skill9.png",alias : "papper"},
            {id : 10, name : "Obliviate", image : "skill10.png",alias : "papper"},
        ],

        playerChar : null,
        computerChar : null,
        charReady : false,
        skillOn : false,
        playerSkillImg : null,
        playerSkill : null,
        computerSkill : null,
        player1Score : 0,
        player2Score : 0,
        result : "Score",
        startBattle : false,
        readyBattle : false,
        setRound : 0,

        handleSetRound(el){
            // console.log(typeof(el.value));
           if(parseInt(el.value) > 0){
            this.startBattle = true;
           }
           else{
            this.startBattle = false;
           }
        },

        handleStartBattle(){
            const setRound = document.querySelector(".set-round input").value;
            this.setRound = setRound;
            this.readyBattle = true;
            console.log("set round = ",setRound);
        },

        handleRestart(){
            const round = document.querySelector(".set-round input").value = 0;
            this.player1Score = 0;
            this.player2Score = 0;

        },

        handleChar(){
            this.playerChar = JSON.parse(localStorage.getItem("selectedHero"));
            this.charReady = true;
            
            const generateIndex = () =>{
                return Math.floor(Math.random() * this.characters.length);
            }

            let index = generateIndex();
            this.computerChar = this.characters[index];
            while(this.computerChar && this.computerChar?.name === this.playerChar?.name){
                index = generateIndex();
                this.computerChar = this.characters[index];
            };

            console.log(`computerChar = ${this.computerChar?.name}`);
            console.log(`playerChar = ${this.playerChar?.name}`);
            console.log(`playerChar = ${this.playerChar?.image}`);
        },

        handleSkill(el){
            if(this.startBattle && this.readyBattle){
                let index = 0;
                this.skillOn = true;
                this.playerSkillImg = el.querySelector("img").getAttribute("src");
                this.playerSkill = el.querySelector(".skill-alias").getAttribute("alias-data");
                const computerSkillImg = document.querySelector(".player-skill .skill2 img");
                // console.log("handleSkill clicked");

                const generateComputerSkill = () => {
                    let index = Math.floor(Math.random() * this.skills.length);
                    this.computerSkill = this.skills[index].alias;
                    console.log(`computerSkill = ${this.computerSkill}`);
                    console.log(`playerSkill = ${this.playerSkill}`);
                    computerSkillImg.setAttribute("src",`media/${this.skills[index].image}`);
                }

                const battlerResult = (player1,player2) => {
                    let result = "";
                    
                    if(player1 == player2){
                        result = "Draw";
                    }
                    else if((player1 == "scissor" && player2 == "papper") || (player1 == "rock" && player2 == "scissor") || (player1 == "papper" && player2 == "rock")){
                        this.player1Score++;
                        result = "Player 1 win"
                    }
                    else{
                        this.player2Score++;
                        result = "Player 2 win";
                    }

                    this.result = result;
                    setTimeout(()=>{
                        this.result = "Score"
                    },1500)

                    return result;
                }

                const runningSkill = setInterval(()=>{
                    computerSkillImg.setAttribute("src",`media/${this.skills[index].image}`);
                
                    index = (index + 1) % this.skills.length;
                },100);

                setTimeout(() => {
                    clearInterval(runningSkill);
                    generateComputerSkill();
                    battlerResult(this.playerSkill, this.computerSkill);
                    if((this.setRound == this.player1Score) || (this.setRound == this.player2Score)){
                        alert(`Game Finish ${this.result}`);
                        this.readyBattle = false;
                        this.startBattle = false;
                    }
                },2000);
            }
        }
    })
})

