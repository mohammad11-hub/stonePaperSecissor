let btns = document.querySelectorAll("button");
let result = document.querySelector("#result");
let user = document.querySelector("#UserScore");
let comp = document.querySelector("#ComputerSore");
let tie = document.querySelector("#TieScore");
let ch = document.querySelector("#uc");
let cho = document.querySelector("#cc");


let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

for (btn of btns) {
    btn.addEventListener("click", function () {
        let bt = this.innerText;
        // console.log(bt);
        function playGame(playerChoice) {
            const choices = ["stone", "paper", "scissors"];
            const computerChoice = choices[Math.floor(Math.random() * 3)];

            console.log(`Player chose: ${playerChoice}`);
            console.log(`Computer chose: ${computerChoice}`);
            ch.innerText = playerChoice;
            cho.innerText = computerChoice;

            if (playerChoice === computerChoice) {
                // console.log("It's a tie!");
                tie.innerText = ++tieScore;
                result.innerText = "It's a tie!";


            } else if (
                (playerChoice === "stone" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "stone") ||
                (playerChoice === "scissors" && computerChoice === "paper")) 
            {

                user.innerText = ++playerScore;
                result.innerText = "Player wins!";
            } else {
                comp.innerText = ++computerScore;

                result.innerText = "Computer wins!";

            }
        }
        playGame(bt); // Replace "stone" with "paper" or "scissors" to test other cases

    });
}
// console.dir(document.querySelectorAll("button"));
// Stone Paper Scissors Game



// Example usage