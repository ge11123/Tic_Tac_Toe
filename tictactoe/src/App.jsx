import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import { useState } from "react";
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


const deriveActivePlayer = (gameTurns) => {
    let currentPlayer = "X";

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
        currentPlayer = "O";
    }

    return currentPlayer;
}



const App = () => {
    const [gameTurns, setGameTurns] = useState([]);
    const activePlayer = deriveActivePlayer(gameTurns);

    let gameBoard = initialGameBoard;

    // turns 初始時是一個空陣列
    // 隨著畫面被點擊時，會將資料存入 turns 陣列，直到畫面沒得點擊(9格都被點擊)為止
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    let winner;

    for (const combination of WINNING_COMBINATIONS) {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
        console.log(`${firstSquareSymbol}, ${secondSquareSymbol}, ${thirdSquareSymbol}`);

        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol;
        }
    }

    const handleSelectSquare = (rowIndex, colIndex) => {

        // 更新遊戲紀錄
        setGameTurns((prevGameTurns) => {
            const currentPlayer = deriveActivePlayer(prevGameTurns);

            const updatedTurns = [
                {
                    square: { row: rowIndex, col: colIndex },
                    player: currentPlayer
                },
                ...prevGameTurns];

            return updatedTurns;
        });
    }

    const hasDraw = gameTurns.length === 9 && !winner;

    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName={"Player1"} symbol={"X"} isAcitve={activePlayer === "X"} />
                <Player initialName={"Player2"} symbol={"O"} isAcitve={activePlayer === "O"} />
            </ol>
            {(winner || hasDraw) && <GameOver winner={winner} />}
            <GameBoard
                onSelectSquare={handleSelectSquare}
                gameBoard={gameBoard}
            />
        </div>
        <Log turns={gameTurns} />
    </main>


}

export default App;