//Container of the Grid
const gridContainer = document.querySelector(".gridContainer");
//To Change Grid Size
let gridRange = document.querySelector("#gridSize");
let gridSize = 32;
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

function changeGridSize() {
  let newSize = 10;
  if (gridSize <= 32) {
    newSize = 1.1;
  }
  if (gridSize <= 24) {
    newSize = 1.2;
  }
  if (gridSize <= 16) {
    newSize = 1;
  }
  if (gridSize <= 12) {
    newSize = 1;
  }
  if (gridSize <= 8) {
    newSize = 0.8;
  }
  if (gridSize <= 4) {
    newSize = 0.5;
  }

  let grids = document.querySelectorAll(".gridBox");
  grids.forEach((grid) => {
    grid.style.height = `${newSize}em`;
    grid.style.width = `${newSize}em`;
  });
}

addGrid();

gridRange.addEventListener("change", () => {
  gridSize = gridRange.value;
  deleteGrid();
  addGrid();
  changeGridSize();
  console.log(gridSize);
});
