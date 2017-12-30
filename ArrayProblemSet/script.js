var testArray = [1,2,3,4,5,10,20,30,40,55,100];

function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var first = arr[0];

	for(var i = 0; i < arr.length; i++) {
		if (first !== arr[i]) {
			return false;
		}
	}
	return true;
}

function sumOfAll(arr) {
	var count = 0;
	arr.forEach(function(number) {
		count += number;
	})
	return count;
}