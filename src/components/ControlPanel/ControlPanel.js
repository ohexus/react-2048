import React from 'react';
import './ControlPanel.scss';
import Score from '../Score/Score';
import ButtonNewGame from '../ButtonNewGame/ButtonNewGame';

export default function ControlPanel(props) {
  return (
    <div className="control">
      <ButtonNewGame onClick={props.newGame} text="New Game" />
      <Score score={ props.score } />
    </div>
  );
}
