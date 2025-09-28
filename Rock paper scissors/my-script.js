console.log("Hello World");

function getComputerChoice(max) {
  const number = Math.floor(Math.random() * max);

  if (number === 0) {
    return "rock";
  } else if (number === 1) {
    return "paper";
  } else if (number === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  const string = prompt("Wybierz 0, 1 lub 2");
  const user_number = parseInt(string);

  if (user_number === 0) {
    return "rock";
  } else if (user_number === 1) {
    return "paper";
  } else if (user_number === 2) {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a draw");
    return "draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! " + humanChoice + " beats " + computerChoice);
    return "human";
  } else {
    console.log("You lose! " + computerChoice + " beats " + humanChoice);
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice(3);

    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
    console.log(
      "Round: ( " +
        (i + 1) +
        " ) Score: Human " +
        humanScore +
        " : " +
        computerScore +
        " Computer"
    );
  }
  if (humanScore > computerScore) {
    console.log("You win!");
  } else if (humanScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log("It's draw");
  }
}

playGame();
