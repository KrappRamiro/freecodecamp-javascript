let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveInputBtn = document.getElementById("save-input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const saveTabBtn = document.getElementById("save-tab-btn");

/* -------------- START OF LOADING PREVIOUSLY STORED DATA -------------- */
//get leads from localStorage and stores it in myLeads
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log("leads from local storage: ", leadsFromLocalStorage);

//renders the retrieved leads
if (leadsFromLocalStorage) {
	//if its not null
	myLeads = leadsFromLocalStorage;
	renderArray(myLeads, myLeads);
}
/* -------------- END OF LOADING PREVIOUSLY STORED DATA ---------------- */

function renderArray(array, html_var_to_load) {
	//log out the variable

	//another way, more efficient because it manipulates the DOM once:
	// it saves all the pages in listItems, and finally it assigns the ulEl innerHTML to be equal to that
	let listItems = "";
	for (let i = 0; i < array.length; i++) {
		// this is a template string, it allows easier HTML formatting in my js code
		listItems += `
		<li>
			<a target='_blank' href='${html_var_to_load[i]}'>
				${array[i]}
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

	renderArray(myLeads, myLeads); //renders the stored leads
});

deleteBtn.addEventListener("dblclick", function () {
	console.log("Deleting the stored leads");
	myLeads = [];
	localStorage.clear();
	renderArray(myLeads, myLeads);
});

saveTabBtn.addEventListener("click", function () {
	// save the url of the current tab
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myLeads.push(tabs[0].url); //add the tab to the myLeads array
		localStorage.setItem("myLeads", JSON.stringify(myLeads));
		renderArray(myLeads, myLeads);
	});

	// saving myLeads[] to local storage

	renderArray(myLeads, myLeads); //renders the stored leads
});
