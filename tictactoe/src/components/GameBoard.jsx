const GameBoard = ({ onSelectSquare, gameBoard }) => {

    // gameBoard 的結構 (rowIndex, colIndex)
    //  [(0,0), (0,1), (0,2)],
    //  [(1,0), (1,1), (1,2)],
    //  [(2,0), (2,1), (2,2)]
    //  這樣當觸發點擊時 onSelectSquare(rowIndex, colIndex) 就可以知道是哪一個格子被點擊了
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) =>
                            <li key={colIndex}>
                                <button
                                    onClick={() => onSelectSquare(rowIndex, colIndex)}
                                    disabled={playerSymbol !== null} 
                                >
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    );
}


export default GameBoard;