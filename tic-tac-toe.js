window.addEventListener('DOMContentLoaded', event => {
    
    const resetButton = document.querySelectorAll('.reset');
    resetButton.forEach(button => {
        button.addEventListener('click', event => {
            console.log("it worked...")
            startGameBoard()
        })    
    })    





})

const startGameBoard = () => {
    for (let i = 0; i < 9; i++) {
        const gridId = `square-${i}`;
        localStorage.setItem(gridId, '');
    }
    localStorage.setItem('X', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
    localStorage.setItem('O', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
}

const turnOrder = () => {
    let turn = 'X';

    if (turn === 'X') {

        const xLink = localStorage.getItem('X');
        // `<img src="${xLink}"/>`
        turn = 'O';
    } else {

        turn = 'X';
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
 *      -Verify if grid is available (proceed) or already been taken (return )
 *      -Pass <img> to associated grid ---->  Based on Obj Value stored in localStorage
 *      -Pass value into Obj
 *      -Invoke winning cases Function
 *
 * 5) New Game  ---->  Clear localStorage   ---> HIDDEN while in play
 * 6) Give Up   ---->  Mock the user and clear localStorage   ----> SHOWS while in play & if pushed other player wins
 * 7) Bonus Computer Mode
 ***********************************************************************************************/
