function drawGrid(grid=16*16) {
    const board = document.querySelector('.board');
    for (let i = 0; i < grid; i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        board.appendChild(box);
    }
}

drawGrid();