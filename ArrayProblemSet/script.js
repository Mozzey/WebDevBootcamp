var testArray = [1,2,3,4,5,10,20,30,40,55,100];

function printReverse(arr) {
	for (var i = arr.length-1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	var counter;

	for(var i = 0; i < arr.length; i++) {
		counter = arr[0];
		if (counter === arr[i]) {
			return true;
		} else {
			return false;
		}
	}
}

