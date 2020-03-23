let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p ");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]
} 
function converToEng(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return  "Scissors";
}
 
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("userchoice:" +userChoice);
    console.log("computerChoice:" +computerChoice);

    function whenWin(user, computer) {
        userScore++;
        userScore_span.innerHTML= userScore;
        result_div.innerHTML = `${converToEng(user)} wins to${converToEng(computer)}, YOU WINN!`;
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(function() {
            document.getElementById(userChoice).classList.remove('green-glow');
         }, 1000)
    }

    function whenLose(u,c) {
       computerScore++;
       computerScore_span.innerHTML = computerScore;
       result_div.innerHTML = `${converToEng(c)} loses to${converToEng(u)}, LOSER`;
       document.getElementById(userChoice).classList.add('red-glow');
       setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
     }, 1000);
    }

    function whenTie() {
     result_div.innerHTML = "TIE IS BORINGGGG!";

     document.getElementById(userChoice).classList.add('gray-glow');
       setTimeout(function() {
        document.getElementById(userChoice).classList.remove('gray-glow');
     }, 1000);
    }

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            whenWin(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            whenLose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            whenTie(userChoice, computerChoice);
            break;       
                     
    }
}

function main() {

    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();