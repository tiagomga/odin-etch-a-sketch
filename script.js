function drawGrid(grid=16) {
    const board = document.querySelector('.board');
    const boardSize = board.offsetWidth;
    const size = boardSize / grid;
    for (let i = 0; i < grid*grid; i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        board.appendChild(box);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    drawGrid();
});