// document.getElementById("count-el").innerText = 5;
// ------------------------------------
// lets break that into parts:
// document.getElementById("count-el")
// means: hey document, get me the element with the id of "count-el"
// it returns <h2 id="count-el">

// the .innerText = 5 part means
// modify the text that is inside the <h2> </h2> to be equal to 5, so it becomes <h2> 5 </h2>

let count = 0;
// this is working with the DOM ---> Document Object Model ---> AKA how you use javascript to modify a website
let countEl = document.getElementById("count-el");
let entriesEl = document.getElementById("entries-el");

function increment() {
	console.log("the increment button was clicked");
	count += 1;
	countEl.innerText = count;
}

function decrement() {
	console.log("the decrement button was clicked");
	count -= 1;
	countEl.innerText = count;
}

function save() {
	console.log("the save button was clicked");
	console.log(count);
	//entriesEl.innerText += count + ", ";
	// .innerText tiene un problema, y es que el ", " no funca del todo bien, porque el html ignora los espacios del final
	// para solucionar este problema, hay que usar google-fu, lo unico que hay que googlear es "innertext alternative mdn" (mdn por Mozilla Dev Network)
	// La alternativa que aparece es textContent, ES MEJOR  porque es menos computational-expensive !!!!
	entriesEl.textContent += count + ", ";
	count = 0;
	countEl.textContent = 0;
}
