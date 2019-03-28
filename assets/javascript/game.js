 //always place this at the start
 'use strict';

 //document ready function
$(document).ready(function() {
  gameStart();
  randomNumberGenerator();
  statsCalc();

});

//global variables defined here
let total = 0,
    wins = 0,
    losses = 0,
    chances = 10;

//random number at start
function startMath() {
  let randomNumber = Math.floor(Math.random() * 101) + 19;
}


//function to display generated random number (between 19 and 120)
function gameStart() {
  $(".randomNumberPop").html(`
    <legend>
      ${randomNumber}
    </legend>
  `);
}
// special button functions to generate random number for each button pressed
function randomNumberGenerator() {
  event.preventDefault();
  //event listening for user clicking the crystal button
  $(".button1").on("click", event => {

  });


  $(".button1").on("click", function(event) {

  });


  $(".button1").on("click", function(event) {

  });


  $(".button1").on("click", function(event) {

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