var testArray = [1,2,3,4,5,10,20,30,40,55,100];

function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var first = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] !=== first) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var counter = 0;
	for(var i = 0; i < arr.length; i++) {
		counter += arr[i]
	}
	return counter;
}

function max() {
	for(var i = 0; i < arr.length; i++) {
		var counter = arr[i];
	}
}