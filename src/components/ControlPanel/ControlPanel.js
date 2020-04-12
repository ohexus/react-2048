import React from 'react';

export default function ControlPanel(props) {
  return (
    <div className="control">
      <button className="control__new-game" type="button" onClick={ props.newGame }> new game </button>
      <h3 className="control__score">{ props.score }</h3>
    </div>
  );
}
