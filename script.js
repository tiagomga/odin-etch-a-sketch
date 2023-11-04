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

function clearBoard() {
    const boxDivs = document.querySelectorAll('.box');
    for (let box of boxDivs) {
        box.style.backgroundColor = 'white';
    }
}

const changeGridButton = document.querySelector('#change-grid');
const clearButton = document.querySelector('#clear-board');

changeGridButton.addEventListener('click', changeGridSize);
clearButton.addEventListener('click', clearBoard);
document.addEventListener('DOMContentLoaded', () => {
    drawGrid();
});