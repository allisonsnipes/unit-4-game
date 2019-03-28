'use strict'; //always place this at the start

$(document).ready(function() {
  gameStart();
  randomNumberGenerator();
  let total = 0;
  let wins = 0;
  let losses = 0;
  let randomNumber = Math.floor(Math.random() * 102 + 18);
});

//function to generate random number at start of game

function gameStart() {
  $(".randomNumberPop").html(`
  <legend>
    ${randomNumber}
  </legend>`
 );
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
// generating a number between 19 and 120
function randomNumberGenerator
Math.floor(Math.random() * 6) + 1