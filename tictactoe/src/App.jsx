import GameBoard from './components/GameBoard.jsx';
import Player from './components/Player.jsx';
import { useState } from "react";
import Log from './components/Log.jsx';

const App = () => {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameTurns, setGameTurns] = useState([]);

    const handleSelectSquare = (rowIndex, colIndex) => {
        // 交換玩家
        setActivePlayer((currentPlayer) => (currentPlayer === 'X' ? 'O' : 'X'));

        // 更新遊戲紀錄
        setGameTurns((prevGameTurns) => {
            let currentPlayer = "X";

            if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
                currentPlayer = "O";
            }

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
        <Log turns={gameTurns}/>
    </main>


}

export default App;