let userScore = 0;
let computerScore = 0;
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const choices = document.querySelectorAll(".choice");
const msg= document.querySelector('.msg');

const showWinner = (userWin , userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log('You win');
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = 'green';
    }else{

        computerScore++;
        computerScorePara.innerText = computerScore;
        // computerScorePara.innerHTML += computerScorePara.innerHTML;
        console.log('You lose');
        msg.innerText = `You lose! ${computerChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }
}

const drawGame = () => {
    console.log('Draw')
    msg.innerText = 'Game Draw! Play again';
    msg.style.backgroundColor = '#081b31';
}

const generateComputerChoice = () => {
    let options = ['rock' , 'paper' , 'scissors'];
   const randomIndex  = Math.floor(Math.random() * 3);
   return options[randomIndex];
}

const playGame = (userChoice) => {

let computerChoice = generateComputerChoice();
console.log(computerChoice);
if(computerChoice === userChoice) {
drawGame();
}else{
    let userWin = true;
    if(userChoice === 'rock' ){
       userWin = computerChoice === 'paper' ? false : true;

    }else if(userChoice === 'paper' ){
        userWin = computerChoice === 'scissors' ? false : true;
    }else{
        userWin = computerChoice === 'rock' ? false: true;
    }
    showWinner(userWin ,userChoice , computerChoice);
}
}
choices.forEach(choice => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        console.log('choice was clicked' );
        playGame(userChoice);

    })
})