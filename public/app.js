// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here
    if(!element.textContent && !checkWin() && !checkDraw()){
        element.textContent = currentPlayer;
        cells[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateTurnText();
    }
    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */

    // Your code to update the game state and check for a win
    // ...

    // Your code to display the current player's turn
    // ...

    // Your code to handle button and cell interactions
    // ...
};

const checkWin = () => {
    for(const condition of conditions){
        const [a,b,c] = condition;
        if(cells[a] && cells[a] === cells[b] && cells[a] === cells[c]){
            result.textContent = `Player ${cells[a]} won`;
            disableButtons();
            return true;
        }
        return false;
    }
};
    /*
    **Part 2: Reset Function (Add your code here)**

    1. Implement a new function that resets the game to its initial state.
    2. Ensure the 'cells', 'btns', and 'currentPlayer' variables are reset.
    3. Update the 'result' element to indicate the current player's turn.
    4. Re-enable all buttons for a new game.
    */
const checkDraw = () => {
    if(cells.every(cell => cell !== '')){
        result.textContent = "It's a draw!";
        disableButtons();
        return true;
    }
    return false;
};

const updateTurnText = () => {
    result.textContent = `Player ${currentPlayer}'s turn`;
};

const disableButtons = () => {
    btns.forEach(btn =>{
        btn.disabled = true;
        btn.style.backgroundColor = '#999';
        btn.style.cursor = 'no-drop';
    });
};

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...

    // Your code to update the 'result' element
    // ...

    // Your code to re-enable buttons
    // ...
    cells = ['','','','','','','','',''];
    currentPlayer = 'X';
    btns.forEach(btn => {
        btn.textContent = '';
        btn.disabled = false;
        btn.style.backgroundColor = '#000';
        btn.style.cursor = 'pointer'
    });
    result.textContent = "Player X's turn";
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);










// let currentPlayer = 'X';
// const board = ['', '', '', '', '', '', '', '', ''];
// let gameOver = false;

// function handleMove(cell, index) {
//     if (!cell.textContent && !gameOver) {
//         cell.textContent = currentPlayer;
//         board[index] = currentPlayer;

//         if (checkWin() || checkDraw()) {
//             displayResult();
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//             updateTurnText();
//         }
//     }
// }

// function checkWin() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6] // Diagonals
//     ];

//     for (const pattern of winPatterns) {
//         const [a, b, c] = pattern;
//         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//             gameOver = true;
//             return true;
//         }
//     }

//     return false;
// }

// function checkDraw() {
//     return board.every(cell => cell !== '');
// }

// function displayResult() {
//     const resultContainer = document.querySelector('.result-container');
//     if (checkWin()) {
//         resultContainer.textContent = `Player ${currentPlayer} wins!`;
//     } else {
//         resultContainer.textContent = "It's a draw!";
//     }
// }

// function updateTurnText() {
//     const resultContainer = document.querySelector('.result-container');
//     resultContainer.textContent = `Player ${currentPlayer}'s turn`;
// }

// const cells = document.querySelectorAll('.cell');
// cells.forEach((cell, index) => {
//     cell.addEventListener('click', () => {
//         handleMove(cell, index);
//     });
// });

// const resetButton = document.getElementById('reset-button');
// resetButton.addEventListener('click', () => {
//     cells.forEach(cell => (cell.textContent = ''));
//     board.fill('');
//     currentPlayer = 'X';
//     gameOver = false;
//     updateTurnText();
//     document.querySelector('.result-container').textContent = "Let's play!";
// });