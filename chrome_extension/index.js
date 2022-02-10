let myLeads = [];
let inputEl = document.getElementById("input-el");
let saveInputBtn = document.getElementById("save-input-btn");
const ulEl = document.getElementById("ul-el");

function renderLeads() {
	//one way, inneficient because manipulating the DOM comes with a cost
	if (false) {
		ulEl.textContent = "";
		for (let i = 0; i < myLeads.length; i++) {
			// innerHTML works like innerText, but it allows to put html
			ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
		}
	}

	//another way, more efficient because it manipulates the DOM once:
	// it saves all the pages in listItems, and finally it assigns the ulEl innerHTML to be equal to that
	let listItems = "";
	for (let i = 0; i < myLeads.length; i++) {
		// this is a template string, it allows easier HTML formatting in my js code
		listItems += `
		<li>
			<a target='_blank' href='${myLeads[i]}'>
				${myLeads[i]}
			</a>
		</li>
		`;
	}
	ulEl.innerHTML = listItems;
}

saveInputBtn.addEventListener("click", function () {
	console.log("Button clicked!");
	myLeads.push(inputEl.value);
	inputEl.value = "";
	console.log(myLeads);
	renderLeads();
});
