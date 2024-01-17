const container = document.querySelector(".container");
const gridSquares = [];

function createGridSquares(num) {
    for (let i = 0; i < num; i++) {
        gridSquares.push(document.createElement("div"));
        gridSquares[i].classList.add("square");
        container.appendChild(gridSquares[i]);
    }
};

createGridSquares(16);
console.log(gridSquares);