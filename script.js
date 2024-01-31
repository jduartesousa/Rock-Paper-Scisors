alert('hi! inspect the console');


/* strings -> fundamentals 2
    functions -> fundamentals 3*/

/*function that will randomly return "rock, paper or scisor"*/

function getComputerChoice(){
       
    let computerNumber = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (computerNumber){
        case 0:
            /*alert('Rock');*/
            console.log('Rock');
            computerChoice = 'rock'
            return computerChoice;
            break;
        case 1:
            /*alert('Paper');*/
            console.log('Paper');
            computerChoice = 'paper'
            return computerChoice;
            break;
        case 2:
            /*alert('Scisors');*/
            console.log('Scisors');
            computerChoice = 'scisors'
            return computerChoice;
            break;
    }

    
};


function getplayerSelection(){

    let getplayerSelection = prompt("Please choose between Rock, Paper or Scisors");
    getplayerSelection = getplayerSelection.toLowerCase(); 
    alert(getplayerSelection);

    if (getplayerSelection === 'rock' | getplayerSelection === 'paper' | getplayerSelection === 'scisors') 
    {
        /*alert('certo!!!!!');*/
        return getplayerSelection;
    }
    else {   
        do {
            getplayerSelection = prompt("Please choose ONLY between Rock, Paper or Scisors");
            getplayerSelection = getplayerSelection.toLowerCase(); 
        } while (!(getplayerSelection === 'rock' || getplayerSelection === 'paper' || getplayerSelection === 'scisors'));

        return getplayerSelection;
    }
};


const playerSelection = getplayerSelection();
const computerSelection = getComputerChoice();
let user_score = 0;
let pc_score = 0;

function playRound(playerSelection, computerSelection) {

    alert("PC selection is: " + computerSelection + ". Player selection is: " + playerSelection)
    if (playerSelection === computerSelection) {
        alert('Its a tie!')
    }
    if (playerSelection === 'paper' & computerSelection === 'rock') {
        alert('You win!!')
    }
    if (playerSelection === 'paper' & computerSelection === 'scisors') {
        alert('You lose!!')
    }
    if (playerSelection === 'rock' & computerSelection === 'scisors') {
        alert('You win!!')
    }
    if (playerSelection === 'rock' & computerSelection === 'paper') {
        alert('You lose!!')
    }
    if (playerSelection === 'scisors' & computerSelection === 'paper') {
        alert('You win!!')
    }
    if (playerSelection === 'scisors' & computerSelection === 'rock') {
        alert('You lose!!')
    }
};
   

console.log(playRound(playerSelection, computerSelection));