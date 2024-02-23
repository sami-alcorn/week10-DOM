//created variables for the user input and table it will be added to
const destination = document.getElementById("trip-input")
const tripTable = document.getElementById("trip-table-body")
//this is function that is called when the add info (submit) button is clicked
//event allows me to utilized the prevent default method, which keeps the page from refreshing
function addTrip(event) {
    event.preventDefault()
    //created variable for the new row that will be added to the table
    const row = document.createElement("tr")
    //used a template literal to set the row's innerHTML to the value of the user input as table data
    row.innerHTML = `<td>${destination.value}</td>`
    //tripTable is the parent, row is the child, this like actually adds the row
    tripTable.appendChild(row)
    //clears the input after the destination as been added
    destination.value = ""
}
    

