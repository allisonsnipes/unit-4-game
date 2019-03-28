 //always place this at the start
 'use strict';

 //document ready function
$(document).ready(function() {
  startMath();
  generateRandomCrystalNum();
  addingAllCrystals()
  restartGame();
});

//global variables defined
let wins = 0,
    losses = 0,
    sum = 0,
    randomNumber = randomNumber;

//generate a random number on webpage load (between 19 and 120)
function startMath() {
  //math for generating random number
  randomNumber = Math.floor(Math.random() * 101) + 19;
  //display random number
  $(".randomNumber").text(`${randomNumber}`);
}

function generateRandomCrystalNum() {
  //need to declare the crystal's random numbers at the start of the game to start
  $(".button").on("click", event => {
    crystalRanNum = Math.floor(Math.random() * 12) + 1;
  });
}

//write a function to add all the crystals together for if/else comparisions
function addingAllCrystals() {
  $(".button").on("click", event => {
    if (sum === 0) {
      sum = crystalRanNum;
      $(".totalScore").text(`Your score is:`+ ${sum});
    } else {
      sum = sum + crystalRanNum
      $(".totalScore").text(`Your score is:`+ ${sum});
    }
  });
}

//game logic if userNumber === random number
if (crystalRanNum === randomNumber) {//function if guess is on point
  wins++; //increase win number
  $(".wins").text(`${wins}`); //displays current # of wins
  $(".losses").text(`${losses}`); //displays current # of losses
  restartGame(); //restart game

} else if (crystalRanNum < randomNumber) {//function if the guess is too low
  generateRandomCrystalNum(); //generate another random crystal number again
  addingAllCrystals(); //add upthe crystals again
  $(".wins").text(`${wins}`);
  $(".losses").text(`${losses}`);
} else {
  //logic if user guesses too high
  prompt("Sorry chap, you guessed too high. Let's play again.");
  losses++; //increase losses
  $(".wins").text(`${wins}`);
  $(".losses").text(`${losses}`);
  restartGame(); //restart game
}

//function to restart game every win/loss
function restartGame() {
  wins = 0;
  losses = 0;
  startMath();
  generateRandomCrystalNum();
}