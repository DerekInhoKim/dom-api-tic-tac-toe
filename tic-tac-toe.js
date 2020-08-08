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

const updateState = (index) => {

}

const updateView = () => {
    
}