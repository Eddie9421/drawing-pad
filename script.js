window.addEventListener("load", () => {
    const gridContainer = document.querySelector(".container");

    const box = document.createElement("div");
    box.classList.add("box");
    const row = document.createElement("div");
    row.classList.add("row");

    // Set number of columns
    for (let i = 0; i < 16; i++) {
        row.appendChild(box.cloneNode());
    }

    // Set number of rows
    for (let i = 0; i < 16; i++) {
        gridContainer.appendChild(row.cloneNode(true));
    }

    gridContainer.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("box")) {
        event.target.style.backgroundColor = "red";
    }
    });


});