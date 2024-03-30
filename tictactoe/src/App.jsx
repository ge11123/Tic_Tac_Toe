import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import { useState } from "react";
import Log from './components/Log.jsx';

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


    return <main>
        <div id="game-container">
            <ol id="players" className="highlight-player">
                <Player initialName={"Player1"} symbol={"X"} isAcitve={activePlayer === "X"} />
                <Player initialName={"Player2"} symbol={"O"} isAcitve={activePlayer === "O"} />
            </ol>
            <GameBoard
                onSelectSquare={handleSelectSquare}
                turns={gameTurns}
            />
        </div>
        <Log turns={gameTurns} />
    </main>


}

export default App;