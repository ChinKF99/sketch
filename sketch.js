const container = document.querySelector('.container')
const input= document.querySelector(".input")
const create = document.querySelector(".createGrid")
const reset = document.querySelector(".reset")


create.addEventListener("click",createGrid)
create.addEventListener("click",createGridCells)
// reset.addEventListener("click",()=>{
//     const gridRow = document.querySelector("gridRow")
//     gridRow.remove()
// })

function createGrid(gridNum) {
    gridNum = Number(input.value)
    for (let i = 0; i < gridNum; i++) {        
        const createDivRow = document.createElement("div");
        createDivRow.classList.add("gridRow")
        container.appendChild(createDivRow);
    }}

function createGridCells(gridNum) {  
    gridNum = Number(input.value)
    const divRows = document.querySelectorAll(".gridRow");    
    //iterate over each one of them
    divRows.forEach(divRow =>{
        //and append to it a new div for as many times as the value fetched from the input element
        for(let i=0;i < gridNum; i++){
          const createDivCell = document.createElement("div");
          createDivCell.classList.add("cell")
          divRow.appendChild(createDivCell);
        }        
    });

    const gridCell = document.querySelectorAll(".cell")
    gridCell.forEach(cell=>{
        cell.addEventListener("mouseover",()=>{
            cell.style.backgroundColor = "yellow"
        })
    })}


