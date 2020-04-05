function isEven(num) {
console.log("EVEN NUMBER CHECKER")
	if(typeof num === "number") {
		if(num%2==0){
			return "Works";
		}
		else{
			return "Does not";
		}
	}

	return "Not a number";
}
function factorial(num) {
console.log("FACTORIAL FINDER")
	if(typeof num === "number") {
		if(num == 0){
			return 1;
		}
		if(num == 1){
			return 1;
		}

		return (num * factorial(num-1));
	}

	return "Not a number";
}
function kebabToSnake(str) {
console.log("KEBABTOSNAKE CONVERTER")
	if(typeof str === "string") {
		//var index = str.indexOf('-');
		//str[index]= "_";

		return str.replace(/-/g, "_");
	}

	return "Not a string";
}

