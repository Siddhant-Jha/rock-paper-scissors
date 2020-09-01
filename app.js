let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.getElementById("resp");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    
}

function win (user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You chose " + convertToWord(user) + " and Computer Chose " + convertToWord(computer) + " You Wins!";
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "You chose " + convertToWord(user) + " but Computer chose " + convertToWord(computer) + " So Computer Wins! ";
}

function draw(user) {
    result_p.innerHTML = "It's A Draw!";
}


function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
       
    }

    
}

function main() {

    rock_div.addEventListener('click', function() {game("r");})
    paper_div.addEventListener('click', function() {game("p");})
    scissors_div.addEventListener('click', function() {game("s");})

    
}

main();