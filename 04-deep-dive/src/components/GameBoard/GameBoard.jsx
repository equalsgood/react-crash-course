const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

export default function GameBoard({isCurrentTurnX, onGameBoardMove}) {
    const clickHandler = (rowI, colI) => {
        if(initialGameBoard[rowI][colI])
            return;
        initialGameBoard[rowI][colI] = isCurrentTurnX ? 'X' : 'O';

        onGameBoardMove(rowI, colI);
    }

    return (
        <ol id="game-board">
            {initialGameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>
                                <button onClick={() => clickHandler(rowIndex, colIndex)}>{col}</button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}