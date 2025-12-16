const grid = document.getElementById('grid');
const size = 6;
const count = size * size;

grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

let cells = [];
let state = [];

// 0 = dead, 1 = alive
// You can edit this pattern!
const initialGrid = [
    [0, 1, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1],
    [0, 1, 0, 0, 0, 0]
];

// Initialize grid with manual state
for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
    cells.push(cell);

    // Calculate x and y from index i
    const x = i % size;
    const y = Math.floor(i / size);

    const isAlive = initialGrid[y][x] === 1;
    state.push(isAlive);
    if (isAlive) cell.classList.add('alive');
}

function update() {
    const nextState = new Array(count).fill(false);

    for (let i = 0; i < count; i++) {
        const x = i % size;
        const y = Math.floor(i / size);
        let neighbors = 0;

        // Count neighbors
        for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
                if (dx === 0 && dy === 0) continue;

                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
                    if (state[ny * size + nx]) neighbors++;
                }
            }
        }

        const alive = state[i];
        if (alive && (neighbors === 2 || neighbors === 3)) {
            nextState[i] = true;
        } else if (!alive && neighbors === 3) {
            nextState[i] = true;
        }
    }

    // Apply state
    state = nextState;
    for (let i = 0; i < count; i++) {
        if (state[i]) {
            cells[i].classList.add('alive');
        } else {
            cells[i].classList.remove('alive');
        }
    }
}

// Run every second
setInterval(update, 500);