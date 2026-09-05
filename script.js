let userScore = 0;
let computerScore = 0;
const choices = document.getElementsByClassName("choice");

const draw

const generateComputerChoice = () => {
    let options = ['rock' , 'paper' , 'scissors'];
   const randomIndex  = Math.floor(Math.random() * 3);
   return options[randomIndex];
}

const playGame = (userChoice) => {

const computerChoice = generateComputerChoice();
console.log(computerChoice);
if(computerChoice === userChoice) {

}
}
choices.forEach(choice => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute('id');
        console.log('choice was clicked' , choiceID);
        playGame(userChoice);

    })
})