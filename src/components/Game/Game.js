import React, { useState, useEffect } from 'react';

import initCells from '../../logic/InitCells';

import ControlPanel from '../ControlPanel/ControlPanel';
import Field from '../Field/Field';

import { moveCells, directions } from '../../logic/moveCells';
import increaseAndKillCells from '../../logic/increaseAndKillCells';
import addNewCells from '../../logic/addNewCells';

// const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function Game() {
  const [score, setScore] = useState(0);
  const [cells, setCells] = useState(initCells());
  const [isMoving, setIsMoving] = useState(false);
  const [isFinishedMoving, setIsFinishedMoving] = useState(false);

  const keyCodeToDirection = {
    w: directions.UP,
    a: directions.LEFT,
    s: directions.DOWN,
    d: directions.RIGHT,
  }

  const handleKeyPress = (event) => {
    if (keyCodeToDirection.hasOwnProperty(event.key)) {
      setCells(moveCells(cells, keyCodeToDirection[event.key]));
      setIsMoving(true);
    }
  }

  const newGame = () => {
    console.log('new game');
    setScore(0);
    setCells(initCells());
  }

  useEffect(() => {
    if (isMoving) {
      setCells(increaseAndKillCells(cells));
      setIsMoving(false);
      setIsFinishedMoving(true);
    }
  }, [cells, isMoving]);

  useEffect(() => {
    if (isFinishedMoving) {
      setCells(addNewCells(cells));
      setIsFinishedMoving(false);
    }
  }, [cells, isFinishedMoving]);

  return (
    <div className="game" onKeyPress={handleKeyPress} tabIndex="0" >
      <ControlPanel newGame={newGame} score={score} />
      <Field cells={cells} />
    </div>
  );
}
