// function to create player
const player = (name, symbol) => {
    return { name, symbol };

};

//factory function to create game board
const createGameBoard = () => {
    const board = Array(9).fill('');

    const getBoard = () => {
        return (board);
    };

    const clearBoard = () => {
        board.fill('')
    };

    const isCellEmpty = (index) => {
        return board[index] === '';

    };

    const placeSymbol = (index, symbol) => {
        if (isCellEmpty(index)) {   //checks if the index is empty and populates it with the symbol
            board[index] = symbol;
            return true;
        } else {
            return false;

        }



    };


    return {
        getBoard,
        clearBoard,
        isCellEmpty,
        placeSymbol,
    };
};


//create game logic(game controls)
const createGameLogic = () => {

    let currentPlayer = player1;
    let gameBoard = createGameBoard();
    const boardEl = document.getElementById('board');



    const displayBoard = () => {
        const board = gameBoard.getBoard();
        boardEl.innerHTML = '';
        board.forEach((cell, index) => {
            const cellEl = document.createElement('div');
            cellEl.classList.add('cell');
            cellEl.textContent = cell;
            cellEl.addEventListener('click', () => handleCellClick(index));
            boardEl.appendChild(cellEl);
        });

    };

    const switchTurn = () => {
        // math bby x = (x === y) ? z : y
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }


    const checkWin = (symbol) => {
        const board = gameBoard.getBoard();
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        return winPatterns.some(pattern => pattern.every(index => board[index] === symbol));


    };

    const handleCellClick = (index) => {
        if (gameBoard.isCellEmpty(index)) {
            gameBoard.placeSymbol(index, currentPlayer.symbol);
            displayBoard();
            if (checkWin(currentPlayer.symbol)) {
                setTimeout(() => {
                    alert(`${currentPlayer.name} wins!`);
                    gameBoard.clearBoard();
                    displayBoard();
                }, 100);
            } else {
                switchTurn();
            }
        }
    };

    displayBoard();


    return {
        displayBoard,
    };


};



//create players
const player1 = player("player1", "X");
const player2 = player("player2", "O");

console.log("Hello")
