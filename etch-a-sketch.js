function createGrid(rows, cols) {
    const container = document.getElementById('container');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('gridRow'); // Add a class for row styling

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('gridCell'); // Add a class for cell styling
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// Create a 16x16 grid
createGrid(16, 16);
console.log(createGrid)
//Hover Effect Section
//When the mouse hovers over a cell, the cell will change color.
//Cell will stay colored even after the mouse leaves cell.

let hover = document.querySelectorAll(".gridCell");
console.log(hover);

hover.forEach(gridCell => {
    gridCell.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = "black";
    });
})

