let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    //rock paper scissors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game draw! play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText = `you win! ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `you lost! ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    };
};


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice
    const CompChoice = genCompChoice();
    console.log("comp choice = ", CompChoice)

    if (userChoice === CompChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = CompChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = CompChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, CompChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

