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
            document.getElementById('game-status').innerHTML = '';
        });
    
    document
        .getElementById('give-up')
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
        if (currentPlayerSymbol === 'X') {
            gameStatus = 'O'
        } else {
            gameStatus = 'X'
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
        // Clear header of any previous games
        if (square === '' && squareId.innerHTML !== '') {
            squareId.innerHTML = '';
        }
    });
    
    // Display winner in header
    const header = document.getElementById('game-status');
    if (gameStatus !== '' && 'tied') {
        header.innerHTML = `Winner is ${gameStatus}!`;
        document.getElementById('new-game').disabled = false
    }

    // Display tie in header
    if (gameStatus === 'tied') {
        header.innerHTML = `Game is a tie.`;
        document.getElementById('new-game').disabled = false
    }

    // Show new-game button and hide give-up button on first load or when game is compete
    if (board.some(square => square !== '' && gameStatus !== '')) {
        document.getElementById('new-game').disabled = false;
        document.getElementById('give-up').disabled = true;
    
    }

    // Hide new-game button and show give-up button while game is in play
    if (board.some(square => square !== '' && gameStatus === '')) {
        document.getElementById('new-game').disabled = true;
        document.getElementById('give-up').disabled = false;
    }
}
// Call updateAndRender so that the game is refreshed on load
updateAndRender(null, true)