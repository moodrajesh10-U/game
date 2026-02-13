let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // update hand emojis
    document.getElementById("player-hand").textContent = getEmoji(playerChoice);
    document.getElementById("computer-hand").textContent = getEmoji(computerChoice);

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win 🎉";
        playerScore++;
    } else {
        result = "Computer Wins 😢";
        computerScore++;
    }

    document.getElementById("result").textContent = result;
    document.getElementById("score").textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;
}

function getEmoji(choice) {
    if (choice === "rock") return "✊";
    if (choice === "paper") return "✋";
    if (choice === "scissors") return "✌️";
}