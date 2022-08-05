const gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;

function addGridBox(row) {
  for (let i = 0; i < gridSize; i++) {
    let gridBox = document.createElement("div");
    gridBox.classList.add("gridBox");
    gridContainer.appendChild(row);
    row.appendChild(gridBox);
  }
}
for (let i = 0; i < gridSize; i++) {
  let row = document.createElement("div");
  addGridBox(row);
}
