function printReverse(arr) {
	for(var i = arr.length -1;i>=0;i--) {
		console.log(arr[i]);
	}
}

function isUniform(arr) {
	for(var i = 0;i<arr.length - 1;i++) {
		if(arr[i] != arr[i+1]){
			return false;
		}

	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	for(var i = 0; i<=arr.length-1;i++){
		sum = sum + arr[i];
	}
	console.log(sum);

}

function max(arr) {
	var max = 0;
	for(var i = 0; i<=arr.length-1;i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	console.log(max);
}