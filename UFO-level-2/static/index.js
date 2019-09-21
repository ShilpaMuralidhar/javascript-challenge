/// from data.js
let tableData = data;
console.log(data);

// YOUR CODE HERE!
let mainTable = d3.select("tbody");

//Function to build table
function buildTable(data) {
    // Removes existing data
    mainTable.html("");
    //forEach will run the main table once 
    data.forEach((rowOfTable) => {
        // Append the table row tr to the tbody
        let row = mainTable.append("tr");
        //iterate the values of the object using forEach
        Object.values(rowOfTable).forEach((val) => {
            // Append a cell to the row for each value
            let cellOfTable = row.append("td");
            cellOfTable.text(val);
        });

    })
}
// Event tha triggers a function when button is clicked
function handleClick() {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Select html input element and get value property of that input element
    let date = d3.select("#datetime").property("value");
    let state = d3.select("#state").property("value");
    let city = d3.select("#city").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
    
    
    let filterData = tableData;

    // Check if a date was entered and filter Data using that date
    if(date) {
        // filters to retain rows when datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    if(state) {
        filterData = filterData.filter((row) => row.state === state);
    }
    if(city) {
        filterData = filterData.filter((row) => row.city === city);
    }
    if(country) {
        filterData = filterData.filter((row) => row.country === country);
    }
    if(shape) {
        filterData = filterData.filter((row) => row.shape === shape);
    }
    // build table with filtered data
    buildTable(filterData);
}
//on function to attach an event to the handler function
d3.selectAll("#filter-btn").on("click", handleClick);
//build table with data.js
buildTable(tableData);







