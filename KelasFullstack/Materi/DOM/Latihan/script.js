document.addEventListener("DOMContentLoaded",function(){
    const board = document.querySelector(".score-board");
    const status = document.querySelector(".status");
    const maxScoreInput = document.querySelector(".max-score input");
    const p1Display = document.querySelector(".p1-display");
    const p2Display = document.querySelector(".p2-display");
    const p1Button = document.querySelector(".p1-button");
    const p2Button = document.querySelector(".p2-button");
    const versus = document.querySelector(".versus");
    const reset = document.querySelector(".reset");
    // const scoreTitle = document.querySelector(".content .title");

    let p1Score = 0;
    let p2Score = 0;
    let getWinner = false;
    let gameReady = false;
    let maxScore = 0;

    function gameResult(score1, score2){
        console.log(p1Score);
        console.log(p2Score);

        if(score1 > score2){
            status.textContent = "Player 1 WIN !!!";
        }
        else if(score2 >score1){
            status.textContent = "Player 2 WIN !!!";
        }
    }

    maxScoreInput.addEventListener("input",(e)=>{
        maxScore = maxScoreInput.value;
        if(maxScore >= 0 && !getWinner) gameReady = true;
    })

    p1Button.addEventListener("click",()=>{
        if(gameReady && !getWinner){
            p1Score++;
            p1Display.textContent = p1Score;
            
            if(p1Score == maxScore){
                getWinner=true;
                gameResult(p1Score,p2Score);
                board.classList.add("hidden");
                status.classList.remove("hidden");
            }
        }
    })

    p2Button.addEventListener("click",()=>{
        if(gameReady && !getWinner){
            p2Score++;
            p2Display.textContent = p2Score;

            if(p2Score == maxScore){
                getWinner=true;
                gameResult(p1Score,p2Score);
                board.classList.add("hidden");
                status.classList.remove("hidden");
            }
        }
    })

    reset.addEventListener("click",()=>{
        console.log(gameReady);
        console.log(getWinner);
        if(getWinner && gameReady){
            p1Score = 0;
            p2Score = 0;
            p1Display.textContent = p1Score;
            p2Display.textContent = p2Score;
            getWinner = false;
            gameReady = false;
            // scoreTitle.textContent = "SCORE"
            maxScoreInput.value = 0;
            status.classList.add("hidden");
            board.classList.remove("hidden");
        }
    })

    
})