//create secret number
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess
if (guess === secretNumber) {
	alert("You got it right!");
} else if (guess > secretNumber) {
	alert("Too high guess again!");
} else {
	alert ("Too low guess again!");
}