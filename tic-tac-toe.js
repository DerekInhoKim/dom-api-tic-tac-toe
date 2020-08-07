window.addEventListener('DOMContentLoaded', event => {
    showValue();

    const resetButton = document.querySelectorAll('.reset');
    resetButton.forEach(button => {
        button.addEventListener('click', event => {
            console.log("it worked...")
            startGameBoard()
            location.reload()
        })
    })

    const nextTurn = turnOrder();
    const gameBoard = document.getElementById("tic-tac-toe-board")
    gameBoard.addEventListener("click", event => {
        if (event.target.id.includes('square-')) {
            nextTurn(event);
            showValue();
            winningConditions(Object.values(localStorage));
            // console.log("I am after setTimeout")

        }
    })





})

const startGameBoard = () => {
    localStorage.clear();

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

const winningConditions = (arr) => {

    if (localStorage["square-0"] === localStorage["square-1"] && localStorage["square-2"]) {
        console.log("Winner1")
        return gameWinner(localStorage["square-0"])

    } else if (localStorage["square-3"] === localStorage["square-4"] && localStorage["square-5"]) {
        console.log("Winner2")
        return gameWinner(localStorage["square-3"])

    } else if (localStorage["square-6"] === localStorage["square-7"] && localStorage["square-8"]) {
        console.log("Winner3")
        return gameWinner(localStorage["square-6"])

    } else if (localStorage["square-0"] === localStorage["square-3"] && localStorage["square-6"]) {
        console.log("Winner4")
        return gameWinner(localStorage["square-0"])

    } else if (localStorage["square-1"] === localStorage["square-4"] && localStorage["square-7"]) {
        console.log("Winner5")
        return gameWinner(localStorage["square-1"])

    } else if (localStorage["square-2"] === localStorage["square-5"] && localStorage["square-8"]) {
        console.log("Winner6")
        return gameWinner(localStorage["square-2"])

    } else if (localStorage["square-0"] === localStorage["square-4"] && localStorage["square-8"]) {
        console.log("Winner7")
        return gameWinner(localStorage["square-0"])

    } else if (localStorage["square-2"] === localStorage["square-4"] && localStorage["square-6"]) {
        console.log("Winner8")
        return gameWinner(localStorage["square-2"])
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
