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
        });
    
    document
        .getElementById('new-game')
        .addEventListener('click', () => {
            updateAndRender(null, true)
        });
    
    document
        .getElementById('new-game')
        .addEventListener('click', () => {
            updateAndRender(null, false, true)
        });
});

const updateAndRender = (index, newGame, giveUp) => {
    updateState(index, newGame, giveUp);
    updateView();
}

let currentPlayerSymbol;
let board;
let gameStatus;

const updateState = (index, newGame, giveUp) => {
    // New Game Button
    if (newGame) {
        currentPlayerSymbol = 'X';
        board = ['', '', '', '', '', '', '', '', ''];
        gameStatus = '';
    }

    // Give Up Button
    if (giveUp) {
        const header = getElementById('game-status');
        if (currentPlayerSymbol === 'X') {
            header.innerHTML = 'Winner is O!'
        } else {
            header.innerHTML = 'Winner is X!'
        }
    }
    
    /*********************Game Logic*********************/
    
    // Stop game once an outcome is determined
    if (gameStatus !== '') return;

    // Place playerSymbol in board array and then swich to other player's symbol
    if (board[index] === '') {
        board[index] = currentPlayerSymbol;

        currentPlayerSymbol === 'X' ? currentPlayerSymbol = 'O' : currentPlayerSymbol = 'X';
    }
    
    // Check for vertical winning line
    for (let i = 0; i < 3; i++) {
        const topSquare = board[i];
        const belowSquare = board[i + 3];
        const twoBelowSquare = board[i + 6];
        
        if (topSquare !== '' && topSquare === belowSquare && belowSquare === twoBelowSquare) {
            gameStatus = topSquare;
        }
    }

    // Check for horizontal winning line
    for (let i = 0; i < 9; i += 3) {
        const leftSquare = board[i];
        const middleSquare = board[i + 1];
        const rightSquare = board[i + 2];
        
        if (leftSquare !== '' && leftSquare === middleSquare && middleSquare === rightSquare) {
            gameStatus = leftSquare;
        }
    }

    // Check for top-left to bottom-right winning line
    if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
        gameStatus = board[0];
    }

    // Check for bottom-left to top-right winning line
    if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
        gameStatus = board[2];
    }
}

const updateView = () => {   
    board.forEach((square, i) => {
        const squareId = document.getElementById(`square-${i}`);
        const squareImg = document.createElement('img');
        
        // If there is an X or O in board array, display the corresponding symbolImg
        if (square === 'X' && squareId.innerHTML === '') {
            squareImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
            squareId.appendChild(squareImg);
        } 
        
        if (square === 'O' && squareId.innerHTML === '') {
            squareImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
            squareId.appendChild(squareImg);
        }
    });
    
    // Display winner in header
    const header = document.getElementById('game-status');
    if (gameStatus !== '' && 'tied') {
        header.innerHTML = `Winner is ${gameStatus}!`;
    }

    // Display tie in header
    if (gameStatus === 'tied') {
        header.innerHTML = `Game is a tie.`;
    }

    if (board.every('')) {
        document.getElementById('new-game').disable = false;
        document.getElementById('give-up').disable = true;
    }

    if (!board.every('')) {
        document.getElementById('new-game').disable = false;
        document.getElementById('give-up').disable = true;
    }
}