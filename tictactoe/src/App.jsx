
import Player from './components/Player.jsx';

const App = () => {


    return <main>
        <div id="game-container">
            <ol id="players">
                <Player initialName={"Player1"} symbol={"X"} />
                <Player initialName={"Player2"} symbol={"o"} />
            </ol>
            GAME BOARD
        </div>
    </main>


}

export default App;