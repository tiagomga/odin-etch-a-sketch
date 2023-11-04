function drawGrid(grid=16) {
    const board = document.querySelector('.board');
    const boardSize = board.offsetWidth;
    const size = boardSize / grid;
    for (let i = 0; i < grid*grid; i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        addColorEvent(box);
        board.appendChild(box);
    }
}

function changeGridSize() {
    let gridSize = document.querySelector('#grid-size').value;
    const board = document.querySelector('.board');

    // Constrain gridSize to a maximum of 100
    if (gridSize > 100) {
        gridSize = 100;
    }

    while (board.childNodes.length !== 0) {
        for (let child of board.childNodes) {
            board.removeChild(child);
        }
    }
    drawGrid(gridSize);
}

function addColorEvent(div) {
    div.addEventListener('mouseover', (event) => {
        const color = document.querySelector('#color-picker').value;
        event.target.style.backgroundColor = `${color}`;
    });
}

const changeGridButton = document.querySelector('#change-grid');

changeGridButton.addEventListener('click', changeGridSize);
document.addEventListener('DOMContentLoaded', () => {
    drawGrid();
});