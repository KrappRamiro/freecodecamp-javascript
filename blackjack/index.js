let sum = 0;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el"); // its a # because its an id, equivalent code --> // let sumEl = document.getElementById("sum-el");
// you can also select a class by using (".class-name-here") or all the <h2> ("<h2>")
cards = [];
cardsEl = document.querySelector("#cards-el");
money = 0;
moneyEl = document.querySelector("#money-el");
moneyEl.textContent = 0;

function checkGameStatus() {
	if (sum < 21) {
		// keep playing
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		//win
		message = "You win!";
		hasBlackjack = true;
		money += 200;
	} else {
		//lose
		message = "you lose... :(";
		isAlive = false;
		money -= 10;
	}
	messageEl.textContent = message;
	moneyEl.textContent = money;
}

function startGame() {
	renderGame();
}
function renderGame() {
	checkGameStatus();
	sumEl.textContent = sum;
}

function newCard() {
	if (isAlive && !hasBlackjack) {
		let carta = Math.floor(Math.random() * 13 + 1);
		if (carta >= 11 && carta <= 13) {
			carta = 10;
		}
		cards.push(carta);
		cardsEl.textContent += " " + carta + " --- ";
		sum += carta;
		renderGame();
		console.debug(cards);
	}
}
