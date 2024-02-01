alert('hi! try to beat the PC');


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
    };    
};


function getplayerSelection(){

    let getplayerSelection = prompt("Please choose between Rock, Paper or Scisors");
    getplayerSelection = getplayerSelection.toLowerCase(); 
    /*alert(getplayerSelection);*/

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

function playGame() {

    let playerSelection;
    let computerSelection;
    let user_score = 0;
    let pc_score = 0;
    let roundCount = 1;

    function playRound(playerSelection, computerSelection) {

        alert("PC selection is: " + computerSelection + ". Player selection is: " + playerSelection)
        if (playerSelection === computerSelection) {
            alert('Its a tie!')
        };
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            alert('You win!!')
            ++user_score;
            alert('your score is:' + user_score )
            alert('PC score is:' + pc_score)
        };
        if (playerSelection === 'paper' && computerSelection === 'scisors') {
            alert('You lose the round!!')
            ++pc_score;
            alert('your score is:' + user_score)
            alert('PC score is:' + pc_score)
        };
        if (playerSelection === 'rock' && computerSelection === 'scisors') {
            alert('You win the round!!')
            ++user_score;
            alert('your score is:' + user_score)
            alert('PC score is:' + pc_score)
        };
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            alert('You lose!!')
            ++pc_score;
            alert('your score is:' + user_score)
            alert('PC score is:' + pc_score)
        };
        if (playerSelection === 'scisors' && computerSelection === 'paper') {
            alert('You win!!')
            ++user_score;
            alert('your score is:' + user_score)
            alert('PC score is:' + pc_score)
        };
        if (playerSelection === 'scisors' && computerSelection === 'rock') {
            alert('You lose!!')
            ++pc_score;
            alert('your score is:' + user_score)
            alert('PC score is:' + pc_score)
        };
    };

    while (roundCount < 6) {
        computerSelection = getComputerChoice();
        playerSelection = getplayerSelection();
        playRound(playerSelection, computerSelection)
        roundCount++
        if (roundCount < 5) {
            alert('round: ' + roundCount)
            alert('next round:')
        };
    };

    if (user_score > pc_score) {
        alert("YOU WIN the game")
    }
    else {
        alert("You lose the game.")
    };
};
playGame();