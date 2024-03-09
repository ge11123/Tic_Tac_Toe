import { useState } from "react";

const Player = ({ initialName, symbol }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    }

    let editTablePlayerName = <span className="player-name">{playerName}</span>;

    if (isEditing === true) {
        editTablePlayerName = <input
            type="text"
            placeholder="請輸入名稱"
            required defaultValue={playerName}
            onChange={handleChange} />
    }



    return <li>
        <span className="player">
            {editTablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>; 

    </li>
}


export default Player;