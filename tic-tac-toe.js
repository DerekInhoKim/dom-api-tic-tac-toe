window.addEventListener('DOMContentLoaded', event => {
    const gameBoard = document.getElementById("tic-tac-toe-board")

    const resetButton = document.querySelectorAll('.reset');
    resetButton.forEach(button => {
        button.addEventListener('click', event => {
            console.log("it worked...")
            startGameBoard()
            location.reload()
        })
    })

    gameBoard.addEventListener("click", event => {
        turnOrder(event);
        showValue()
    })





})

const startGameBoard = () => {
    for (let i = 0; i < 9; i++) {
        const gridId = `square-${i}`;
        localStorage.setItem(gridId, '');
        console.log("I am here")

    }
    localStorage.setItem('X', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
    localStorage.setItem('O', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
}

const turnOrder = (event) => {
    const boxId = event.target.id
    let turn = 'X';
    console.log(turn)
    if (turn === 'X') {
        localStorage[boxId] = 'X'
        turn = 'O';

    } else {
        localStorage[boxId] = 'O'
        turn = 'X';

    };
};

const showValue = () => {
    const values = Object.values(localStorage);
    const key = Object.keys(localStorage);

    values.forEach(function(value, index){
        const xLink = localStorage.getItem('X');
        const oLink = localStorage.getItem('O');
        let keyBox = document.getElementById(key[index]);

        if (value === "X") {
            keyBox.innerHTML = `<img src="${xLink}"/>`;

        }
        if (value === "O") {
            keyBox.innerHTML = `<img src="${oLink}"/>`;

        }
    });
    // Evaluate if value === x || o
    // if true display x || o ,  matchingDiv.innerHTML =  `<img src="${xLink} || ${oLink} "/>`
    //

};




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
