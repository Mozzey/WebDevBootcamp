var age = prompt("What is your age?");

if (age < 0) {
	console.log("Error negative number!");
}

if (age == 21) {
	console.log("Happy 21st Birthday!! Come on in. You can drink!!");
} 

if (age % 2 !== 0) {
	console.log("Your age is odd!");
}
if (age % Math.sqrt(age) === 0) {
	console.log("Your age is a perfect square!");
}

