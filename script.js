window.addEventListener("load", () => {
    const gridContainer = document.querySelector(".container");

    const box = document.createElement("div");
    box.classList.add("box");

    for (let i = 0; i < 16; i++) {
        gridContainer.cloneNode(box);
    }
});