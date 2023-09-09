// // Initial game state
// let cells = ['', '', '', '', '', '', '', '', ''];
// let currentPlayer = 'X';
// let result = document.querySelector('.result');
// let cells = document.querySelectorAll('.btn');
// let conditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// // Function to handle player moves
// const ticTacToe = (element, index) => {
//     // Your game logic here
//     if(!element.textContent && !checkWin() && !checkDraw()){
//         element.textContent = currentPlayer;
//         btns[index] = currentPlayer;
//         currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         updateTurnText();
//     }
//     /*
//     **Part 1: Winning Conditions (Add your code here)**

//     1. Implement the logic to check for winning conditions using the 'conditions' array.
//     2. Display a winning message in the 'result' element when a player wins.
//     3. Disable all buttons after a win.
//     */

//     // Your code to update the game state and check for a win
//     // ...

//     // Your code to display the current player's turn
//     // ...

//     // Your code to handle button and btn interactions
//     // ...
// };

// const checkWin = () => {
//     for(const condition of conditions){
//         const [a,b,c] = condition;
//         if(btns[a] && btns[a] === btns[b] && btns[a] === btns[c]){
//             result.textContent = `Player ${btns[a]} won`;
//             disableButtons();
//             return true;
//         }
//         return false;
//     }
// };
//     /*
//     **Part 2: Reset Function (Add your code here)**

//     1. Implement a new function that resets the game to its initial state.
//     2. Ensure the 'btns', 'btns', and 'currentPlayer' variables are reset.
//     3. Update the 'result' element to indicate the current player's turn.
//     4. Re-enable all buttons for a new game.
//     */
// const checkDraw = () => {
//     if(btns.every(btn => btn !== '')){
//         result.textContent = "It's a draw!";
//         disableButtons();
//         return true;
//     }
//     return false;
// };

// const updateTurnText = () => {
//     result.textContent = `Player ${currentPlayer}'s turn`;
// };

// const disableButtons = () => {
//     btns.forEach(btn =>{
//         btn.disabled = true;
//         btn.style.backgroundColor = '#999';
//         btn.style.cursor = 'no-drop';
//     });
// };

// // Function to reset the game
// const resetGame = () => {
//     // Your code to reset the game state
//     // ...

//     // Your code to update the 'result' element
//     // ...

//     // Your code to re-enable buttons
//     // ...
//     btns = ['','','','','','','','',''];
//     currentPlayer = 'X';
//     btns.forEach(btn => {
//         btn.textContent = '';
//         btn.disabled = false;
//         btn.style.backgroundColor = '#000';
//         btn.style.cursor = 'pointer'
//     });
//     result.textContent = "Player X's turn";
// };

// btns.forEach((btn, i) => {
//     btn.addEventListener('click', () => ticTacToe(btn, i));
// });

// document.querySelector('#reset').addEventListener('click', resetGame);










// // let currentPlayer = 'X';
// // const board = ['', '', '', '', '', '', '', '', ''];
// // let gameOver = false;

// // function handleMove(btn, index) {
// //     if (!btn.textContent && !gameOver) {
// //         btn.textContent = currentPlayer;
// //         board[index] = currentPlayer;

// //         if (checkWin() || checkDraw()) {
// //             displayResult();
// //         } else {
// //             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
// //             updateTurnText();
// //         }
// //     }
// // }

// // function checkWin() {
// //     const winPatterns = [
// //         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
// //         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
// //         [0, 4, 8], [2, 4, 6] // Diagonals
// //     ];

// //     for (const pattern of winPatterns) {
// //         const [a, b, c] = pattern;
// //         if (board[a] && board[a] === board[b] && board[a] === board[c]) {
// //             gameOver = true;
// //             return true;
// //         }
// //     }

// //     return false;
// // }

// // function checkDraw() {
// //     return board.every(btn => btn !== '');
// // }

// // function displayResult() {
// //     const resultContainer = document.querySelector('.result-container');
// //     if (checkWin()) {
// //         resultContainer.textContent = `Player ${currentPlayer} wins!`;
// //     } else {
// //         resultContainer.textContent = "It's a draw!";
// //     }
// // }

// // function updateTurnText() {
// //     const resultContainer = document.querySelector('.result-container');
// //     resultContainer.textContent = `Player ${currentPlayer}'s turn`;
// // }

// // const btns = document.querySelectorAll('.btn');
// // btns.forEach((btn, index) => {
// //     btn.addEventListener('click', () => {
// //         handleMove(btn, index);
// //     });
// // });

// // const resetButton = document.getElementById('reset-button');
// // resetButton.addEventListener('click', () => {
// //     btns.forEach(btn => (btn.textContent = ''));
// //     board.fill('');
// //     currentPlayer = 'X';
// //     gameOver = false;
// //     updateTurnText();
// //     document.querySelector('.result-container').textContent = "Let's play!";
// // });

// script.js

const PLAYER_X = 'X';
const PLAYER_O = 'O';
let currentPlayer = PLAYER_X;
let isGameActive = true;
const buttons = document.querySelectorAll('.btn');
const resultContainer = document.querySelector('.result');
const resetButton = document.getElementById('reset-btn');
function handleButtonClick(event) {
    const button = event.target;
    if (button.textContent === '' && isGameActive) {
        button.textContent = currentPlayer;
        button.classList.add('filled');
        if (checkWin() || checkDraw()) {
            isGameActive = false;
            resultContainer.textContent = isGameActive ? `Player ${currentPlayer}'s Turn` : 'Game Over';
        } else {
            currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
            resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }
}
function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (buttons[a].textContent && buttons[a].textContent === buttons[b].textContent && buttons[a].textContent === buttons[c].textContent) {
            resultContainer.textContent = `Player ${currentPlayer} Wins!`;
            return true;
        }
    }

    return false;
}

function checkDraw() {
    const isDraw = [...buttons].every(button => button.textContent !== '');
    if (isDraw) {
        resultContainer.textContent = 'It\'s a Draw!';
        return true;
    }
    return false;
}
function resetGame() {
    buttons.forEach(button => {
        button.textContent = '';
        button.classList.remove('filled');
    });

    currentPlayer = PLAYER_X;
    isGameActive = true;
    resultContainer.textContent = `Player ${currentPlayer}'s Turn`;
}
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
resetButton.addEventListener('click', resetGame);