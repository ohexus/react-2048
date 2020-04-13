import React from 'react';
import './Score.scss';

export default function Score(props) {
  return (
    <div className="score">
      <h3 className="score__title">Score</h3>
      <p className="score__number">{ props.score }</p>
    </div>
  );
}
