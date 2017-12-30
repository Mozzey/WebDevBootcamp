var testArray = [1,2,3,4,5,10,20,30,40,55,100];

//*** printReverse ***
function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

//*** isUniform ***
function isUniform(arr) {
	var first = arr[0];

	for(var i = 1; i < arr.length; i++) {
		if (first !== arr[i]) {
			return false;
		}
	}
	return true;
}

//*** sumOfAll ***
function sumOfAll(arr) {
	var currentSum = 0;
	arr.forEach(function(number) {
		currentSum += number;
	})
	return currentSum;
}

//*** max ***
function max(arr) {
	var firstNum = arr[0];
	// for(var i = 1; i < arr.length; i++) {
	// 	if (arr[i] > firstNum) {
	// 		firstNum = arr [i];
	// 	}
	// }
	arr.forEach(function(currentNum) {
		if (currentNum >= firstNum) {
			firstNum = currentNum;
		}
	})
	return firstNum;
}