import React, { useState } from 'react';

import initCells from '../../logic/InitCells';

import ControlPanel from '../ControlPanel/ControlPanel';
import Field from '../Field/Field';

import { moveCells, directions } from '../../logic/moveCells';

export default function Game() {
  const [score, setScore] = useState(0);
  const [cells, setCells] = useState(initCells());

  const keyCodeToDirection = {
    w: directions.UP,
    a: directions.LEFT,
    s: directions.DOWN,
    d: directions.RIGHT,
  }

  const handleKeyPress = async(event) => {
    if (keyCodeToDirection.hasOwnProperty(event.key)) {
      console.log(keyCodeToDirection[event.key]);
      setCells(moveCells(cells, keyCodeToDirection[event.key]));
    }
  }

  const newGame = () => {
    console.log('new game');
    console.log(cells);
    setScore(0);
    setCells(initCells());
  }

  return (
    <div className="game" onKeyPress={handleKeyPress} tabIndex="0" >
      <ControlPanel newGame={newGame} score={score} />
      <Field cells={cells} />
    </div>
  );
}
