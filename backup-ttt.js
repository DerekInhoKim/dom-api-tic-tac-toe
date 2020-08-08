window.addEventListener('DOMContentLoaded', event => {
    showValue();

    const newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener('click', event => {
        startGameBoard();
        location.reload();
    })

    const giveUpButton = document.getElementById("give-up");
    giveUpButton.addEventListener("click", event => {
        giveUp();
    })

    const nextTurn = turnOrder();
    const gameBoard = document.getElementById("tic-tac-toe-board")
    gameBoard.addEventListener("click", event => {
        if (event.target.id.includes('square-')) {
            nextTurn(event);
            showValue();
            winningConditions();
            // console.log("I am after setTimeout")

        }
    })



})

const startGameBoard = () => {
    localStorage.clear();
    // gameOn();
    for (let i = 0; i < 9; i++) {
        const gridId = `square-${i}`;
        localStorage.setItem(gridId, '');
    }

    localStorage.setItem('X', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
    localStorage.setItem('O', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
}

const turnOrder = () => {
    let turn = 'X';
    return (event) => {
        const boxId = event.target.id
        if (turn === 'X') {
            localStorage[boxId] = 'X'
            turn = 'O';

        } else {
            localStorage[boxId] = 'O'
            turn = 'X';
        };
    }
};


const showValue = () => {
    const values = Object.values(localStorage);
    const keys = Object.keys(localStorage);

    values.forEach(function(value, index){
        const xLink = localStorage.getItem('X');
        const oLink = localStorage.getItem('O');
        let keyBox = document.getElementById(keys[index]);

        if (value === "X") {
            keyBox.innerHTML = `<img src="${xLink}"/>`;

        }
        if (value === "O") {
            keyBox.innerHTML = `<img src="${oLink}"/>`;
        }
    });
};

const winningConditions = () => {

    const square0 = localStorage["square-0"]
    const square1 = localStorage["square-1"]
    const square2 = localStorage["square-2"]
    const square3 = localStorage["square-3"]
    const square4 = localStorage["square-4"]
    const square5 = localStorage["square-5"]
    const square6 = localStorage["square-6"]
    const square7 = localStorage["square-7"]
    const square8 = localStorage["square-8"]


    if ((square0 === square1) && (square0 === square2)) {
        return gameWinner(square0)

    } else if ((square3 === square4 ) && (square3 === square5)) {
        return gameWinner(square3)

    } else if ((square6 === square7) && (square6 === square8)) {
        return gameWinner(square6)

    } else if ((square0 === square3) && (square0 === square6)) {
        return gameWinner(square0)

    } else if ((square1 === square4) && (square1 === square7)) {
        return gameWinner(square1)

    } else if ((square2 === square5) && (square2 === square8)) {
        return gameWinner(square2)

    } else if ((square0 === square4) && (square0 === square8)) {
        return gameWinner(square0)

    } else if ((square2 === square4) && (square2 === square6)) {
        return gameWinner(square2)
    }


    const values = Object.values(localStorage);
    if (!values.includes('')) {
        return gameWinner('tied')
    }

}

const gameWinner = (value) => {

    if (value === 'X') {
        const xWins = document.getElementById("game-status")
        xWins.innerHTML = "X Wins!"

    } else if (value === 'O') {
        const oWins = document.getElementById("game-status")
        oWins.innerHTML = "O Wins!"

    } else if (value === 'tied') {
        const tiedGame = document.getElementById("game-status")
        tiedGame.innerHTML = "Tied game!"

    }
}

// Create gameOn and gameOff functions

const gameOn = () => {
    const newGameButton = document.getElementById("new-game");
    const giveUpButton = document.getElementById("give-up");

    newGameButton.style.visibility = "hidden"
    giveUpButton.style.visibility = "visible"

}

const gameOff = () => {
    const newGameButton = document.getElementById("new-game");
    const giveUpButton = document.getElementById("give-up");

    newGameButton.style.visibility = "visible"
    giveUpButton.style.visibility = "hidden"

}

const giveUp = () => {
    gameOff();
    const xCount = Object.values(localStorage).filter(ele => ele === 'X').reduce((accum,ele) => accum + ele)
    const oCount = Object.values(localStorage).filter(ele => ele === 'O').reduce((accum,ele) => accum + ele)
    const header = document.getElementById("game-status")

    if(xCount === oCount){
        header.innerHTML = "O Wins!"
    } else {
        header.innerHTML = "X Wins!"
    }

}



/**********************************************************************************************
 *
 *1) Object IS THE localStorage
        -keys = grid-ID
        -values = X || O
 *2) Establish the winning patterns
        -Switch / Case
        -addEventListener
            -Function that is invoked each click to verify possible winning combos
 *3) In order to start a game, the user MUST CLICK "New Game" Button
 *4) Function: (on click)
 *      -Pass <img> to associated grid ---->  Based on Obj Value stored in localStorage
 *      -Pass value into Obj
 *      -Invoke winning cases Function
 *      -grab targetid, set as a key in local storage (event).
 *      -Display image of 'x' or 'o'
 *      -store value of x or o in localStorage with key of event target
 *
 * 4.A)
 *
 *      -Verify if grid is available (proceed) or already been taken (return )
 *      -check if win conditions are met
 *
 *
 * 5) New Game  ---->  Clear localStorage   ---> HIDDEN while in play
 * 6) Give Up   ---->  Mock the user and clear localStorage   ----> SHOWS while in play & if pushed other player wins
 * 7) Bonus Computer Mode
 ***********************************************************************************************/
