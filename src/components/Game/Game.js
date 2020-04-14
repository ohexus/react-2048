import React, { useState, useEffect } from 'react';
import './Game.scss';

import { isEqual, sortBy } from 'lodash';

import ControlPanel from '../ControlPanel/ControlPanel';
import Field from '../Field/Field';
import Description from '../Description/Descriptions';

import initCells from '../../logic/InitCells';
import { moveCells, directions } from '../../logic/moveCells';
import increaseAndKillCells from '../../logic/increaseAndKillCells';
import addNewCells from '../../logic/addNewCells';

import checkIsGameOver from '../../helpers/checkIsGameOver';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export default function Game() {
  const [score, setScore] = useState(0);
  const [cells, setCells] = useState(initCells());
  const [isMoving, setIsMoving] = useState(false);
  const [isFinishedMoving, setIsFinishedMoving] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const keyCodeToDirection = {
    w: directions.UP,
    a: directions.LEFT,
    s: directions.DOWN,
    d: directions.RIGHT,
    ArrowUp: directions.UP,
    ArrowLeft: directions.LEFT,
    ArrowDown: directions.DOWN,
    ArrowRight: directions.RIGHT,
  }

  const handleKeyPress = (event) => {
    if (keyCodeToDirection.hasOwnProperty(event.key)) {
      const movedCells = moveCells(cells, keyCodeToDirection[event.key]);

      const equal = isEqual(sortBy(cells), sortBy(movedCells));

      if (!equal) {
        setCells(movedCells);
        setIsMoving(true);
      }
    }
  }

  const newGame = () => {
    setIsGameOver(false);
    setScore(0);
    setCells(initCells());
  }

  useEffect(() => {
    if (cells.length === 16) {
      const isOver = checkIsGameOver(cells);

      if (isOver) { setIsGameOver(true) }
    }
  }, [cells]);

  useEffect(() => {
    if (isMoving) {
      setCells(increaseAndKillCells(cells, score, setScore));
      setIsMoving(false);
      (async () => {
        await delay(100);
        setIsFinishedMoving(true);
      })();
    }
  }, [cells, score, setScore, isMoving]);

  useEffect(() => {
    if (isFinishedMoving) {
      setCells(addNewCells(cells));
      setIsFinishedMoving(false);
    }
  }, [cells, isFinishedMoving]);

  return (
    <div
      className="game"
      onKeyDown={ isGameOver ? null : handleKeyPress }
      tabIndex="0"
    >
      <ControlPanel newGame={ newGame } score={ score } />
      <Field cells={ cells } isGameOver={ isGameOver } />
      <Description />
    </div>
  );
}
