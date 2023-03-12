// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    //get table to use and manipulate

    //if there are columns then delete else do nothing and throw an alert.
    if (numCols !== 0){
        
        //loop through each row to delete last cell
        for (i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(-1);
        }

        //decrese column count
        numCols--;

        //if all columns deleted then there shouldnt be any rows
        //delete all rows
        if (numCols === 0) {
            for (i = 0; i < numRows; i++) {
                table.deleteRow(-1);
            }

            //initialize back to 0
            numRows = 0;
        }

    }else{
        //if trying to delete column but there is none
        alert("No Columns to delete")
    }
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}