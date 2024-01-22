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
            break;
        case 1:
            /*alert('Paper');*/
            console.log('Paper');
            computerChoice = 'paper'
            break;
        case 2:
            /*alert('Scisors');*/
            console.log('Scisors');
            computerChoice = 'scisors'
            break;
    }

    
}


function playerSelection(){

    let playerSelection = prompt("Please choose between Rock, Paper or Scisors");
    playerSelection = playerSelection.toLowerCase(); 
    alert(playerSelection);

    if (playerSelection === 'rock' | playerSelection === 'paper' | playerSelection === 'scisors') 
    {
        alert('certo!!!!!');
    }
    else {   
        do {
            playerSelection = prompt("Please choose ONLY between Rock, Paper or Scisors");
            playerSelection = playerSelection.toLowerCase(); 
        } while (!(playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scisors'));

        alert(playerSelection);
    }

   


    
}
playerSelection()


/*function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/