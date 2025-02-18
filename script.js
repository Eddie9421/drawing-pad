const MAXIMUM_NUMBER_OF_SQUARES = 100;

function createGrid(squares) {
    const gridContainer = document.querySelector(".container");
    gridContainer.replaceChildren();

    const box = document.createElement("div");
    box.classList.add("box");
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
    


    gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "red";
    }
    });
}

window.addEventListener("load", () => {
    
    const gridChangerButton = document.querySelector(".grid-changer-button");

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