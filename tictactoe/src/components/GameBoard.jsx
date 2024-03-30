import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({ onSelectSquare, turns }) => {

    let gameBoard = initialGameBoard;

    // turns 初始時是一個空陣列
    // 隨著畫面被點擊時，會將資料存入 turns 陣列，直到畫面沒得點擊(9格都被點擊)為止
    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

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
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>)}
                    </ol>
                </li>)}
        </ol>
    );
}


export default GameBoard;