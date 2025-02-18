const MAXIMUM_NUMBER_OF_SQUARES = 100;


window.addEventListener("load", () => {
    const gridContainer = document.querySelector(".container");
    const gridChangerButton = document.querySelector(".grid-changer-button");
    
    function getRandomColorValue() {
        return Math.round(Math.random() * 255);    
    }
    
    function createGrid(squares) {
        // Delete any old grids.
        gridContainer.replaceChildren();
    
        const box = document.createElement("div");
        box.classList.add("box");
        box.setAttribute("style", `background: rgba(0, 0, 0, 0);`);
        const row = document.createElement("div");
        row.classList.add("row");
    
        // Set number of columns
        for (let i = 0; i < squares; i++) {
            row.appendChild(box.cloneNode());
        }
    
        // Set number of rows
        for (let i = 0; i < squares; i++) {
            gridContainer.appendChild(row.cloneNode(true));
        }
    }

    gridContainer.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("box")) {
            const tempArr = event.target.style.background.split(",");
            // Alpha value is the number after the last comma.
            let oldAlphaValue = parseFloat(tempArr[tempArr.length - 1]);
            oldAlphaValue += 0.1;
            event.target.setAttribute("style", `background: rgba(${getRandomColorValue()}, ${getRandomColorValue()}, ${getRandomColorValue()}, ${oldAlphaValue});`);
        }   
    });
    
    gridChangerButton.addEventListener("click", () => {
        let squares = parseInt(prompt("Enter # of squares on each side:"));
        if (squares > MAXIMUM_NUMBER_OF_SQUARES) {
            alert(`You cannot create more than ${MAXIMUM_NUMBER_OF_SQUARES} squares.`)
        }
        else {
            createGrid(squares);
        }
    })

});