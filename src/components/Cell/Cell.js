import React from 'react';
import './Cell.scss';

export default function Cell(props) {
  return (
    <div
      className={ `cell ${props.className}` }
      style={ {
        transform: `translate(${props.x * 100}px, ${props.y * 100}px)`
      } }
    >
      <div className="cell__content">
        <span>{ props.value }</span>
      </div>
    </div>
  );
}
