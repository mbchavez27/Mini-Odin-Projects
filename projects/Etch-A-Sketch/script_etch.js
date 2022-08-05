//Container of the Grid
const gridContainer = document.querySelector(".gridContainer");
//To Change Grid Size
let gridRange = document.querySelector("#gridSize");
let gridSize = gridRange.value;
//To Change Grid Color
let color = "black";

function addGridBox(row) {
  for (let i = 0; i < gridSize; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridContainer.appendChild(row);
    row.appendChild(gridBox);

    gridBox.addEventListener("dragenter", () => {
      gridBox.style.backgroundColor = color;
    });
  }
}

function addGrid() {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    addGridBox(row);
  }
}

function deleteGrid() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
}

addGrid();

gridRange.addEventListener("change", () => {
  gridSize = gridRange.value;
  deleteGrid();
  addGrid();
  console.log(rows);
});
