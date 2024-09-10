document.addEventListener("DOMContentLoaded", function(){
    const cells = document.querySelectorAll(".box");
    const status = document.querySelector(".status");
    const restart = document.querySelector(".restart");
    let currentPlayer = "X";
    let player1Score = 0;
    let player2Score = 0;
    const boardGame = Array(9).fill("");
    let getWinner = "";
    let boardFull = false;
    const winningCondition = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    const checkScore = () => {
        boardFull = !boardGame.includes("") ? true : false;
        if(boardFull){
            for(state of winningCondition){
                const [a,b,c] = state;
                if(boardGame[a] == "X" && boardGame[b] == "X" && boardGame[c] == "X"){
                    player1Score +=1;
                }
                if(boardGame[a] == "O" && boardGame[b] == "O" && boardGame[c] == "O"){
                    player2Score +=1;
                }
            }
        }
        console.log(`player 1 score = ${player1Score}`);
        console.log(`player 2 score = ${player2Score}`);
        return boardFull;
    }

    const checkWinner = () => {
        if(boardFull){
            if(player1Score > player2Score){
                getWinner = "Player 1 Win"
            }
            else if(player2Score > player1Score){
                getWinner = "Player 2 Win"
            }
            else{
                getWinner = "Draw";
            }
        }
        console.log(`get Winner = ${getWinner}`)
        return getWinner;
    }

    const handleClick = (e) => {
        const cell = e.target;
        const indexCell = cell.getAttribute("data-index");
        
        if(boardGame[indexCell] == "" && !getWinner){
            boardGame[indexCell] = currentPlayer;
            cell.textContent = currentPlayer;

            if(cell.textContent == "X") cell.style.color = "white";
            else{cell.style.color = "black"}
        }

        console.log(boardGame);
        checkScore();
        checkWinner();

        currentPlayer = (currentPlayer == 'X') ? "O" : "X";
        if(boardFull && getWinner){
            status.textContent = getWinner;
        }
    }

    const handleRestart = () => {
        boardGame.fill("");
        getWinner = "";
        player1Score = 0;
        player2Score = 0;
        currentPlayer = "X";
        status.textContent = "MOVE !!"

        cells.forEach(cell => {
            cell.textContent = "";
        })

    }

    cells.forEach(cell => cell.addEventListener("click",handleClick));
    restart.addEventListener("click",handleRestart)
})