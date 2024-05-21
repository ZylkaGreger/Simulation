document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';

    // Create columns
    const columns = ['To Do', 'In Progress', 'Done'];
    columns.forEach(column => {
        const columnDiv = document.createElement('div');
        columnDiv.className = 'column';
        columnDiv.id = column.toLowerCase().replace(' ', '-');
        columnDiv.innerHTML = `<h2>${column}</h2>`;
        gameBoard.appendChild(columnDiv);
    });

    // Create cards (tasks)
    const tasks = ['Task 1', 'Task 2', 'Task 3'];
    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'card';
        taskDiv.textContent = task;
        document.getElementById('to-do').appendChild(taskDiv);
    });

    // Add event listeners for drag and drop
    addDragAndDrop();
}

function addDragAndDrop() {
    const cards = document.querySelectorAll('.card');
    const columns = document.querySelectorAll('.column');

    cards.forEach(card => {
        card.setAttribute('draggable', true);

        card.addEventListener('dragstart', () => {
            card.classList.add('dragging');
        });

        card.addEventListener('dragend', () => {
            card.classList.remove('dragging');
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingCard = document.querySelector('.dragging');
            column.appendChild(draggingCard);
        });
    });
}
