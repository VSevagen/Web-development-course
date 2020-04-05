var ans = prompt("What do you want to do ?");
var list = [];

function print() {
	console.log("*********");
		var index = 0;
		list.forEach(function(item) {
			console.log(index + ":" + list[index]);
			index=index+1;
		});
		console.log("*********");
}


while(ans !== "quit") {
	if(ans == "new") {
		var input = prompt("What do you want to do ?");
		list.unshift(input);
		console.log(input + " has been added to list");
	}

	else if (ans == "list") {
		print();
	}
	else if (ans ==="delete") {
		var index = prompt("Enter the index of the item you want to delete");
		list.splice(index,1);
		print()
	}

	ans = prompt("What do you want to do ?");
}
