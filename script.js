let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");

const showWinner = (userWin) => {
    if (userWin) {
        console.log('You win');
    }else{
        console.log('You lose');
    }
}

const drawGame = () => {
    console.log('Draw')
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
       userWin = computerChoice = 'paper' ? false : true;

    }else if(userChoice === 'paper' ){
        userWin = computerChoice = 'scissors' ? false : true;
    }else{
        userWin = computerChoice = 'rock' ? false: true;
    }
    showWinner(userWin);
}
}
choices.forEach(choice => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        console.log('choice was clicked' );
        playGame(userChoice);

    })
})