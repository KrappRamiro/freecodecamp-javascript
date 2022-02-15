let myLeads = [];

let inputEl = document.getElementById("input-el");
let saveInputBtn = document.getElementById("save-input-btn");
let deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

/* -------------- START OF LOADING PREVIOUSLY STORED DATA -------------- */
//get leads from localStorage and stores it in myLeads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log("leads from local storage: ", leadsFromLocalStorage);

//renders the retrieved leads
if (leadsFromLocalStorage) {
	//if its not null
	myLeads = leadsFromLocalStorage;
	renderLeads();
}

/* -------------- END OF LOADING PREVIOUSLY STORED DATA ---------------- */

function renderLeads() {
	//log out the variable

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
	myLeads.push(inputEl.value); //add the input to the myLeads array
	console.log("saved the lead: ", inputEl.value); //log the saved lead
	inputEl.value = ""; //clear the input

	// saving myLeads[] to local storage
	localStorage.setItem("myLeads", JSON.stringify(myLeads));

	renderLeads(); //renders the stored leads
});

deleteBtn.addEventListener("dblclick", function () {
	console.log("Deleting the stored leads");
	myLeads = [];
	localStorage.clear();
	renderLeads();
});
