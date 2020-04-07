var playerOne = document.querySelector(".playerOne");
var playerTwo = document.querySelector(".playerTwo");
var limit = document.querySelector(".limit");
var reset = document.querySelector(".reset");
var numInput = document.querySelector(".num_input");
var player1_scr = 0;
var player2_scr = 0;

function data() {
	limit.textContent = numInput.value;
	reset();
}

function incrementOne() {
	player1_scr++;
	document.querySelector(".oneScore").textContent = player1_scr;

	if(player1_scr == limit.textContent){
		document.querySelector(".oneScore").style.color = "green";
		document.querySelector(".playerOne").removeEventListener("click", incrementOne);
		document.querySelector(".playerTwo").removeEventListener("click", incrementTwo);
		
	}
}

function incrementTwo() {
	player2_scr++;
	document.querySelector(".twoScore").textContent = player2_scr;

	if(player2_scr == limit.textContent){
		document.querySelector(".twoScore").style.color = "green";
		document.querySelector(".playerTwo").removeEventListener("click", incrementTwo);
		document.querySelector(".playerOne").removeEventListener("click", incrementOne);
	}

}

numInput.addEventListener("change", data);
playerOne.addEventListener("click", incrementOne);
playerTwo.addEventListener("click", incrementTwo);

reset.addEventListener("click", function(){
	document.querySelector(".oneScore").textContent = "0";
	document.querySelector(".twoScore").textContent = "0";
	document.querySelector(".oneScore").style.color = "black";
	document.querySelector(".twoScore").style.color = "black";
	document.querySelector(".playerOne").addEventListener("click", incrementOne);
	document.querySelector(".playerTwo").addEventListener("click", incrementTwo);
	player1_scr = 0;
	player2_scr = 0;
})
