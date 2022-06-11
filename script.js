
let row1 = document.createElement('div');
row1.classList.add('row1');

let container = document.querySelector(".grid");
container.appendChild(row1);

function createCell() {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  row1.appendChild(cell);
}


function createRow() {
  for (let i = 0; i < 16; i++) {
    createCell();
  }
}

createRow();







