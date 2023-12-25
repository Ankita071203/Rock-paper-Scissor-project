let userScore=0;
let comScore=0;


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");




const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor ="#081b31";
};

const showWinner =(userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        comScore++;
        compScorePara.innerText = comScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice",userChoice);
    //generate computer choice ->modular
    const compChoice= genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            userWin=compChoice ==="paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissor" ? false: true;
        }
        else{
            userWin=compChoice=== "scissor" ? false: true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});