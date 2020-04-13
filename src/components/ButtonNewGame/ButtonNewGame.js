import React from 'react';
import './ButtonNewGame.scss';

export default function ButtonNewGame(props) {
  return (
    <button className="button-new-game" type="button">{ props.text }</button>
  );
}
