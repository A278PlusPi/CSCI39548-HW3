// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Indicate rows and columns on screen
function getDimensions() {
  var cells = numRows * numCols;
  if (numRows == 0 && numCols == 0) {
    alert("There are no rows and no columns in your grid, so there are no cells!");
  }
  else if (numRows == 1 && numCols == 1) {
    alert("There is " + numCols + " column and " + numRows + " row in your grid.\nTotal: " + cells + " cell.");
  }
  else if (numRows == 1) {
    alert("There are " + numCols + " columns and " + numRows + " row in your grid.\nTotal: " + cells + " cells.");
  }
  else if (numCols == 1) {
    alert("There are " + numCols + " column and " + numRows + " rows in your grid.\nTotal: " + cells + " cells.");
  }
  else {
    alert("There are " + numCols + " columns and " + numRows + " rows in your grid.\nTotal: " + cells + " cells.");
  }
}

// Add a row
function addR() {
  var table = document.getElementById("grid");

  let row = document.createElement("tr");
  if (numRows * numCols == 0) {
    let cell = document.createElement("td");
    row.appendChild(cell);
    numRows++;
    numCols++;
  } else {
    for (let i = 0; i < numCols; i++) {
      let cell = document.createElement("td");
      row.appendChild(cell);
    }

    numRows++;
  }

  table.appendChild(row);
  // alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
  let rows = document.querySelectorAll("#grid tr");

  if (numRows * numCols == 0) {
    var table = document.getElementById("grid");

    let row = document.createElement("tr");
    let cell = document.createElement("td");
    row.appendChild(cell);
    numRows++;
    numCols++;
    table.appendChild(row);
  } else {
    for (let row of rows) {
      let cell_1 = document.createElement("td");
      row.appendChild(cell_1);
    }

    numCols++;
  }

  // alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
  document.getElementById("grid").deleteRow(numRows - 1);
  if (numRows == 1) {
    numCols = 0;
  }
  if (numRows > 0) {
    numRows--;
  }

  // alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
  let table = document.getElementById("grid");
  //get table to use and manipulate

  //if there are columns then delete else do nothing and throw an alert.
  if (numCols !== 0) {
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
  } else {
    //if trying to delete column but there is none
    alert("No Columns to delete");
  }
}

// Set global variable for selected color
function selectColor() {
  colorSelected = document.getElementById("selectedColorId").value;
  console.log(colorSelected);
}

//color a single cell on click
// Add event listener to the parent element (table)
document.querySelector("#grid").addEventListener("click", function (event) {
  // Check if the clicked element is a cell (td)
  if (event.target.tagName === "TD") {
    // Color the clicked cell
    colorSelected = document.getElementById("selectedColorId").value;
    event.target.style.backgroundColor = colorSelected;
  }
});

// Fill all uncolored cells
function fillU() {
  let colorOptionSelected = document.getElementById("selectedColorId");
  colorSelected =
    colorOptionSelected.options[
      colorOptionSelected.selectedIndex
    ].text.toLowerCase();
  let table = document.getElementById("grid").getElementsByTagName("td");
  for (let i = 0; i < table.length; i++) {
    //if find any cell that is not colored -> color it with chosen color
    if (table[i].style.backgroundColor == "") {
      table[i].style.backgroundColor = `${colorSelected}`;
      console.log("the cell number: ", table[i]);
    }
  }
}

// Fill all cells
function fillAll() {
  let colorOptionSelected = document.getElementById("selectedColorId");
  colorSelected =
    colorOptionSelected.options[
      colorOptionSelected.selectedIndex
    ].text.toLowerCase();
  let table = document.getElementById("grid").getElementsByTagName("td");
  for (let i = 0; i < table.length; i++) {
    table[i].style.background = `${colorSelected}`;
  }
}

// Clear all cells
function clearAll() {
  let table = document.getElementById("grid").getElementsByTagName("td");
  for (let i = 0; i < table.length; i++) {
    table[i].style.background = "";
  }
}
