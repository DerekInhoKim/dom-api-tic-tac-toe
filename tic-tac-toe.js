window.addEventListener('DOMContentLoaded', event => {







})






const turnOrder = () => {
    let turnNum = 0;

    return () => {
        turnNum++;
        
        if (turnNum % 2 === 0) {
            let oImg = document.createElement('img');
            oImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg');
            oImg.setAttribute('class', 'O');
            
        } else {
            
            let xImg = document.createElement('img');
            xImg.setAttribute('src', 'https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg');
            xImg.setAttribute('class', 'X');
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