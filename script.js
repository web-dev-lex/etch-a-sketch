
let gridContainer = document.getElementsByClassName("gridContainer")[0];


function changeColor() {
  this.style.backgroundColor = "black";
}

function createGrid() {
  for (let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    div.classList.add(i);
    div.addEventListener("mouseover", changeColor);    
    gridContainer.appendChild(div);
  }
}



createGrid();








  










