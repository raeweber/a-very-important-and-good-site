let numMultiplied;
let firstNum;
let secondNum;

document.getElementById("numSubmit").onclick = function() {
	
	firstNum = document.getElementById("numOne").value;
    secondNum = document.getElementById("numTwo").value;
	
	numMultiplied = firstNum * secondNum;
	
	document.getElementById("numAnswer").textContent = `The answer is: ${numMultiplied}!`
}