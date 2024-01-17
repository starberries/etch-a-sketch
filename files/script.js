const container = document.querySelector(".container");
const gridColumns = [];
const gridRows = [];

function createGrid(columns, rows) {
    let loops
    //Columns
    for (let a = 0; a < columns; a++) {
        gridColumns.push(document.createElement("div"));
        gridColumns[a].classList.add("column");
        container.appendChild(gridColumns[a]);
        loops = gridRows.length;

        //Rows
        loops = gridRows.length
        for (let b = gridRows.length; b < (loops+rows); b++) {
            gridRows.push(document.createElement("div"));
            gridRows[b].classList.add("row");
            gridColumns[a].appendChild(gridRows[b]);
        }
    }
}

createGrid(16, 16);