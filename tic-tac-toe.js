// Process input/Update state/Update view
// 1. Handle the board click: handle click, update board model, render Xs and Os
// 2. Check if the game is over
// 3. Handle the new game button
// 4. Handle the give up button

document.addEventListener('DOMContentLoaded', () => {
   
    document
        .getElementById('tic-tac-toe-board')
        .addEventListener('click', event => {
            const targetId = event.target.id;
            if (!event.target.id.includes('square-')) return;

            const index = Number.parseInt(targetId[targetId.length - 1]);
            updateAndRender(index);
        })

});

const updateAndRender = (index) => {
    updateState(index);
    updateView();
}

let currentPlayerSymbol = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const updateState = (index) => {
    if (board[index] === '') {
        board[index] = currentPlayerSymbol;

        currentPlayerSymbol === 'X' ? currentPlayerSymbol = 'O' : currentPlayerSymbol = 'X';
    }
    
    
}

const updateView = () => {   
    board.forEach((square, i) => {
        const squareId = document.getElementById(`square-${i}`);
        const squareImg = document.createElement('img');
        
        if (square === 'X' && squareId.innerHTML === '') {
            squareImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
            console.log(squareImg);
            squareId.appendChild(squareImg);
            console.log(squareId);
        } 
        if (square === 'O' && squareId.innerHTML === '') {
            squareImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
            squareId.appendChild(squareImg);
        }
    }); 
}