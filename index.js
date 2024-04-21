
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let result = document.getElementById("result")
let restartBtn = document.getElementById("restart")
let movesText = document.getElementById("moves-text")


let Score = 0
let playerScore = 0
let computerScore = 0
let movesLeft = 0
let totalMoves = 10


function restartDom() {
    restartBtn.style.display = "block"
    restartBtn.style.border = "none"
    restartBtn.style.background = "#800080"
    restartBtn.style.padding = "5px 10px"
    restartBtn.style.color = "white"
    restartBtn.style.cursor = "pointer"
    restartBtn.style.textAlign = "center"
}

restartBtn.onclick = () => {
    location?.reload()
}


const handleRock = () => {

    let moves = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3);
    let computerMove = moves[randomNum];
    movesLeft += 1
    document.getElementById("moves-left").innerHTML = `You have ${totalMoves - movesLeft} moves left`
    document.getElementById("moves-left").style.textAlign = "center"

    movesText.innerText = `You Chose Rock | Computer Chose ${computerMove}`

    if (totalMoves < 0 || movesLeft > 9) {
        document.getElementById("moves-left").innerText = "You have No moves Left"
    }
    else {
        if (computerMove === "rock") {
            Score = 0
        } else if (computerMove === "paper") {
            Score = -1;
            computerScore += 1
        } else {
            Score = 1
            playerScore += 1
        }
    }



    scoreShower(playerScore, computerScore)
    DeclareWinner(Score)
    restartDom()
}

rockBtn.onclick = handleRock



const handlePaper = () => {
    let moves = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3);
    let computerMove = moves[randomNum];
    movesLeft += 1
    document.getElementById("moves-left").innerHTML = `You have ${totalMoves - movesLeft} moves left`
    movesText.innerText = `You Chose Paper | Computer Chose ${computerMove}`

    if (totalMoves < 0 || movesLeft > 9) {
        document.getElementById("moves-left").innerText = "You have No moves Left"
    } else {
        if (computerMove === "paper") {
            Score = 0
        } else if (computerMove === "rock") {
            Score = 1
            playerScore += 1
        } else {
            Score = -1
            computerScore += 1
        }
    }

    scoreShower(playerScore, computerScore)
    DeclareWinner(Score)
    restartDom()

}

paperBtn.onclick = handlePaper


const handleScissors = () => {
    let moves = ["rock", "paper", "scissors"]
    let randomNum = Math.floor(Math.random() * 3);
    let computerMove = moves[randomNum];
    movesLeft += 1
    document.getElementById("moves-left").innerHTML = `You have ${totalMoves - movesLeft} moves left`
    movesText.innerText = `You Chose Scissors | Computer Chose ${computerMove}`

    if (totalMoves < 0 || movesLeft > 9) {
        document.getElementById("moves-left").innerText = "You have No moves Left"
    }
    else {
        if (computerMove === "paper") {
            Score = 1
            playerScore += 1
        } else if (computerMove === "rock") {
            Score = -1
            computerScore += 1
        } else {
            Score = 0
        }

    }
    scoreShower(playerScore, computerScore)
    DeclareWinner(Score)
    restartDom()

}

scissorsBtn.onclick = handleScissors

const DeclareWinner = (score) => {
    if (score === 0) {
        result.innerText = "This Move is a Tie😊😊"
        result.style.color = "gray"
    }
    else if (score === 1) {
        result.innerText = "Congratulations!! You Won this Move 😘😘"
        result.style.color = "green"
    }
    else {
        result.innerText = "Oops!, You Lost this Move😒😒"
        result.style.color = "red"
    }
}

const scoreShower = (playerScore, computerScore) => {
    if (totalMoves < 0 || movesLeft > 9) {
        if (playerScore > computerScore) {
            document.getElementById("winner").innerText = `Congratulations!! You Won the Game by ${playerScore - computerScore} score 😍😍`
            document.getElementById("winner").style.color = "green"
        }
        else if (playerScore === computerScore) {
            document.getElementById("winner").innerText = "This Game has ended on a Tie😊😊"
            document.getElementById("winner").style.color = "gray"
        }
        else {
            document.getElementById("winner").innerText = `Oops!! You lost the game by ${computerScore - playerScore} score 😒😒`
            document.getElementById("winner").style.color = "red"
        }
    }
    else {
        document.getElementById("playerScore").innerText = `Your Score is : ${playerScore}`
        document.getElementById("computerScore").innerText = `Computer Score is : ${computerScore}`
    }

}






