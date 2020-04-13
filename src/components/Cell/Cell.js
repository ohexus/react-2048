import React from 'react';
import './Cell.scss';

export default function Cell(props) {
  return (
    <div
      className={ `cell ${props.className}` }
      style={ {
        transform: `translate(${props.x * 125}px, ${props.y * 125}px)`
      } }
    >
      <div className={`cell__number cell__number--${props.value}`}>
        <span
        >
          { props.value === 0 ? '' : props.value }
        </span>
      </div>
    </div >
  );
}
