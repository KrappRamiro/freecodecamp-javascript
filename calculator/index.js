function add() {
	document.getElementById("amount").textContent =
		"Amount: " +
		(parseInt(document.getElementById("num1-el").textContent) +
			parseInt(document.getElementById("num2-el").textContent));
}

function substract() {
	document.getElementById("amount").textContent =
		"Amount: " +
		(parseInt(document.getElementById("num1-el").textContent) -
			parseInt(document.getElementById("num2-el").textContent));
}

function divide() {
	document.getElementById("amount").textContent =
		"Amount: " +
		parseInt(document.getElementById("num1-el").textContent) /
			parseInt(document.getElementById("num2-el").textContent);
}

function multiply() {
	document.getElementById("amount").textContent =
		"Amount: " +
		parseInt(document.getElementById("num1-el").textContent) *
			parseInt(document.getElementById("num2-el").textContent);
}

let num1 = 12;
let num2 = 4;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
