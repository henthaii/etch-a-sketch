function createGrid(rows, cols) {
    const container = document.getElementById('container');

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row'); // Add a class for row styling

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell'); // Add a class for cell styling
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

// Create a 16x16 grid
createGrid(16, 16);

//Hover Effect Section
//When the mouse hovers over a cell, the cell will change color.
//Cell will stay colored even after the mouse leaves cell.

