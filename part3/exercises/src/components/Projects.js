import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let gameData = data;
    let currentGame = gameData[index];
    function handleClick() {
        if (index < gameData.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
        // console.log('click');

    }
    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <div>Game Name: {currentGame.title}</div>
            <div>Designer: {currentGame.designer}</div>
            <img src={currentGame.photoURL} alt={currentGame.alt} />
        </div>
    )


}