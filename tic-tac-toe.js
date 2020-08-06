window.addEventListener('DOMContentLoaded', event => {
    const nextTurn = turnOrder()

    const board = document.getElementById("tic-tac-toe-board")
    board.addEventListener("click", event => {
        const square = event.target.id
        console.log("square " + square)
        nextTurn(square)

    })





})






const turnOrder = () => {
    let turnNum = 0;

    return (target) => {
        turnNum++;

        if (turnNum % 2 === 0) {
            let oImg = document.createElement('img');
            oImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
            oImg.setAttribute('class', 'O');
            target.innerHTML = oImg

        } else {

            let xImg = document.createElement('img');
            xImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
            xImg.setAttribute('class', 'X');
            target.innerHTML = xImg
        }
    }
}


/**********************************************************************************************
 *
 *
 *
 *
 *
 *
 *
 ***********************************************************************************************/
