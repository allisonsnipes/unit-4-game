 //always place this at the start
 'use strict';

 //document ready function
$(document).ready(function() {
  startMath();
  generateRandomCrystalNum();
  statsCalc();
});

//global variables defined
let total = 0,
    wins = 0,
    losses = 0,
    randomNumber = randomNumber;

//generate a random number on webpage load (between 19 and 120)
function startMath() {
  //math for generating random number
  randomNumber = Math.floor(Math.random() * 101) + 19;
  //display random number
  $(".randomNumberPop").text(`${randomNumber}`);
}

function generateRandomCrystalNum() {
  //need to declare the crystal's random numbers at the start of the game to start
  startMath();

  $(".button").on("click", event => {
    crystalRanNum = Math.floor(Math.random() * 12) + 1;
    $(".totalScore").text(`Your score is:`+ ${crystalRanNum});
  });
}

//game logic if userNumber === random number
if (userNumber === randomNumber) {
  wins++;
} else { //keep increasing buttons
  chances--;
}


function statsCalc() {
  const percentage = ((wins/10) * 100);
  $(".stats").text(`${percentage} %`)
}