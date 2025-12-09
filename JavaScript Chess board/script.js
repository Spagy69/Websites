document.getElementById('chessForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const size = parseInt(document.getElementById('sizeInput').value);
    const board = document.getElementById('chessboard');

    // Clear previous board
    board.innerHTML = '';

    // Set grid columns
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // Generate cells
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        const row = Math.floor(i / size);
        const col = i % size;

        if ((row + col) % 2 === 0) {
            cell.classList.add('white');
        } else {
            cell.classList.add('black');
        }

        board.appendChild(cell);
    }
});
