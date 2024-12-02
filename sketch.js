const container = document.querySelector("#container");
//let rows = document.getElementsByClassName("gridRow");
//let cells = document.getElementsByClassName("cell");


function createGrid(){
    createRow(16)
    //createColumn(16)
}

function createRow(rowNum){
    for (let r=0 ; r < rowNum; r++){
        let row = document.createElement("div")
        row.classList.add("gridRow")
        container.appendChild(row)
    }
}

function createColumn(cellNum){
    for (let i=0 ; i < rows.length; i++){
        for (let c = 0; c < cellNum; c++){
            let newCell = document.createElement("div")
            newCell.classList.add("cell")
            rows[c].appendChild(newCell)

        }
    }
}

createGrid()
