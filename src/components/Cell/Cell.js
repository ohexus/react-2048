import React from 'react';
import './Cell.scss';

export default function Cell(props) {
  return (
    <div
      className="cell"
      style={ {
        transform: `translate(${props.x * 110}px, ${props.y * 110}px)`
      } }
    >
      { props.value }
    </div>
  );
}
