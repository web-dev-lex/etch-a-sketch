
let gridContainer = document.getElementsByClassName("gridContainer")[0];


function changeColor() {
  this.style.backgroundColor = "black";
}

function createGrid() {
  clear();
  let userInput = parseInt(prompt("Enter how many cells per side (1-100): "));
  gridContainer.style.cssText += `grid-template-columns: repeat(${userInput}, 1fr); grid-template-rows: repeat(${userInput}, 1fr)`;
  for (let i = 0; i < userInput * userInput; i++) {
    let div = document.createElement('div');
    div.classList.add('cell');
    div.classList.add(i);
    div.addEventListener("mouseover", changeColor);    
    gridContainer.appendChild(div);
  }
}

function clear() {
  gridContainer.innerHTML = "";
}

createGrid();

btn = document.getElementById("btn");
btn.addEventListener("click", createGrid);










  










