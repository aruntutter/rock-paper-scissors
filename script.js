"use strict";

// outputs

const compScoreEL = document.querySelector(".comp-score");
const userScoreEL = document.querySelector(".user-score");
const resultContainer = document.querySelector(".result-container");

// global variable
let userScore = 0;
let compScore = 0;

// 1 get the user input
function playGame(userInput) {
  if (userScore >= 5 || compScore >= 5) {
    if (userScore > compScore) {
      resultContainer.innerHTML = `
      <p class="message">GAME OVER</p>
      <p class="message">USER WON</p>
      `;
    } else if (compScore > userScore) {
      resultContainer.innerHTML = `
      <p class="message">GAME OVER</p>
      <p class="message">COMPUTER WON</p>
      `;
    }
  } else {
    const userChoice = userInput;
    const compChoice = getCompChoice();
    const result = getResult(userChoice, compChoice);

    updateScores(result);
    displayResult(userChoice, compChoice, result);
  }
}

// 2 generate and store computer input
function getCompChoice() {
  const randomNumber = Math.trunc(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
}

// 3 compare the input and generate the results
function getResult(userChoice, compChoice) {
  if (userChoice === "rock") {
    if (compChoice === "rock") {
      return "DRAW";
    } else if (compChoice === "paper") {
      return "LOST";
    } else if (compChoice === "scissors") {
      return "WON";
    }
  } else if (userChoice === "paper") {
    if (compChoice === "rock") {
      return "WON";
    } else if (compChoice === "paper") {
      return "DRAW";
    } else if (compChoice === "scissors") {
      return "LOST";
    }
  } else if (userChoice === "scissors") {
    if (compChoice === "rock") {
      return "LOST";
    } else if (compChoice === "paper") {
      return "WON";
    } else if (compChoice === "scissors") {
      return "DRAW";
    }
  }
}

// 4 based on the result increase the respective score
function updateScores(result) {
  if (result === "WON") {
    userScore = userScore + 1;
  }
  if (result === "LOST") {
    compScore = compScore + 1;
  }
}

// 5 display result
function displayResult(userChoice, compChoice, result) {
  const resultMessage = `
    <p class="message"> User Selected: ${userChoice.toUpperCase()} </p>
    <p class="message"> Computer Selected: ${compChoice.toUpperCase()} </p>
    <p class="message result"> Result: ${result} </p>
    `;

  resultContainer.innerHTML = resultMessage;

  // display score
  compScoreEL.innerText = compScore;
  userScoreEL.innerText = userScore;
}