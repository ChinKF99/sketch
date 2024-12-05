const container = document.querySelector('.container');

function createGrid() {
    for (let i = 0; i < 16; i++) {        
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("gridrow")
        container.appendChild(createDivRow);
    }
    
}

function createGridCells() {  
    const divRows = document.querySelectorAll(".gridrow");    
    //iterate over each one of them
    divRows.forEach(divRow =>{
        //and append to it a new div for as many times as the value fetched from the input element
        for(let i=0;i < 16; i++){
          const createDivCell = document.createElement("div");
          divRow.appendChild(createDivCell);
        }        
    });       
}

createGrid()
createGridCells()

// https://stackoverflow.com/questions/78538355/creating-a-grid-using-javascript-without-displaygrid