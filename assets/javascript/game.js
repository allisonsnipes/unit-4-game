 //always place this at the start
 'use strict';

 //document ready function
$(document).ready(function() {
  startMath();
  gameStart();
  randomNumberGenerator();
  statsCalc();

});

//global variables defined
let total = 0,
    wins = 0,
    losses = 0,
    button1 = $(".button1"),
    button2 = $(".button2),
    button3 = $(".button3"),
    button4 = $(".button4");

//random number at start
function startMath() {
  let randomNumber = Math.floor(Math.random() * 101) + 19;
  $(".randomNumber").text(`${randomNumber}`); //display random number

//need to declare the crystal's random numbers at the start of the game to start
  $(".button1").on("click", event => {

  });


  $(".button1").on("click", function(event) {

  });


  $(".button1").on("click", function(event) {

  });


  $(".button1").on("click", function(event) {

  });
}
}


//function to display generated random number (between 19 and 120)
function gameStart() {
  $(".randomNumberPop").html(`
    <legend>
      ${randomNumber}
    </legend>
  `);
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