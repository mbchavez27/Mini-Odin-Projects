//Container of the Grid
const gridContainer = document.querySelector(".gridContainer");
//To Change Grid Size
let gridRange = document.querySelector("#gridSize");
let gridSize = gridRange.value;
//To Change Grid Color
let color = "black";

//Add Rows
function addGridBox(row) {
  for (let i = 0; i < gridSize; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridContainer.appendChild(row);
    row.appendChild(gridBox);

    //Colors each divs
    gridBox.addEventListener("mouseover", () => {
      gridBox.style.backgroundColor = color;
    });
  }
}

//Adds Grids
function addGrid() {
  for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    addGridBox(row);
  }
}

//Deletes the Grid
function deleteGrid() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => row.remove());
}

//Changes the Grid Size
let sizeCounter = document.querySelector("#sizeCounter");

//Tells the size
sizeCounter.innerHTML = `Size: ${gridSize}x${gridSize}`;

//Change Grid
function changeGridSize() {
  let newSize = 0.2;
  if (gridSize >= 39) {
    newSize = 0.5;
  } else {
    newSize = 1;
  }

  //updatees all grids
  let grids = document.querySelectorAll(".gridBox");
  grids.forEach((grid) => {
    grid.style.height = `${newSize}em`;
    grid.style.width = `${newSize}em`;
  });

  //Updates new size
  sizeCounter.innerHTML = `Size: ${gridSize}x${gridSize}`;
}

addGrid();

//Changes size when given new size
gridRange.addEventListener("change", () => {
  gridSize = gridRange.value;
  deleteGrid();
  addGrid();
  changeGridSize();
  console.log(gridSize);
});

const gridColors = {
  red: document.querySelector("#color-Red"),
  green: document.querySelector("#color-Green"),
  blue: document.querySelector("#color-Blue"),
  white: document.querySelector("#color-White"),
  black: document.querySelector("#color-Black"),
};

function updateColor() {
  let colorCounter = document.querySelector("#colorCounter");
  colorCounter.innerHTML = `Color: ${color}`;
}
updateColor();

gridColors.red.addEventListener("click", () => {
  color = "red";
  updateColor();
});
gridColors.green.addEventListener("click", () => {
  color = "green";
  updateColor();
});
gridColors.blue.addEventListener("click", () => {
  color = "blue";
  updateColor();
});
gridColors.black.addEventListener("click", () => {
  color = "black";
  updateColor();
});
gridColors.white.addEventListener("click", () => {
  color = "white";
  updateColor();
});
