// function to create player
const player = (name, symbol) => {
    return { name, symbol };

}



//factory function to create game board
const createGameBoard = () => {
    const board = Array(9).fill('');

    const getBoard = () => {
        return (board);
    }

    const clearBoard = () => {
        board = Array(9).fill('');
    };

    const isCellEmpty = (index) => {
        board[index] === '';

    };

    const placeSymbol = (index, symbol) => {
        if (isCellEmpty(index) == '') {   //checks if the index is empty and populates it with the symbol
            board[index] = symbol;
            return true
        } else {
            return false;

        }



    };


    return {
        getBoard,
        clearBoard,
        isCellEmpty,
        placeSymbol
    }
}

createGameBoard();
//create game logic(game controls)

const createGameLogic = () => {

}
