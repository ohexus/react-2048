import React from 'react';
import './Field.scss';

import Cell from '../Cell/Cell';

export default function Field(props) {
  const backgroundCells = new Array(16).fill(0);

  return (
    <div className="field">
      { props.isGameOver && <div className="field__game-over">
        <h1> Game Over! </h1>
      </div> }
      <div className="field__ground field__ground--background">
        { backgroundCells.map((cell, i) => (
          <Cell
            className="cell--background"
            key={ i }
            value={ cell }
          />
        )) }
      </div>
      <div className="field__ground field__ground--playground">
        { props.cells.map(({ x, y, value, id }) => (
          <Cell
            className="cell--playground"
            key={ id }
            x={ x }
            y={ y }
            value={ value }
          />
        )) }
      </div>
    </div>
  );
}
