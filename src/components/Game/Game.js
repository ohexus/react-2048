import React, { useState } from 'react';

import initCells from '../../logic/InitCells';

import ControlPanel from '../ControlPanel/ControlPanel';
import Field from '../Field/Field';

export default function Game() {
  const [score, setScore] = useState(0);
  const [cells, setCells] = useState(initCells());

  const newGame = () => {
    console.log('new game');
    console.log(cells);
    setScore(0);
    setCells(initCells());
  }

  return (
    <div className="game">
      <ControlPanel newGame={newGame} score={score} />
      <Field cells={cells} />
    </div>
  );
}
