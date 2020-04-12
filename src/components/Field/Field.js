import React from 'react';
import './Field.scss';

import Cell from '../Cell/Cell';

export default function Field(props) {
  return (
    <div className="field">
      { props.cells.map(({ x, y, value, id }) => (
        <Cell
          key={ id }
          x={ x }
          y={ y }
          value={ value }
        />
      )) }
    </div>
  );
}
