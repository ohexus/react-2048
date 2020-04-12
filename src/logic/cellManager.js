import { uniqueId } from 'lodash';

const cellStates = {
  IDLE: "IDLE",
  MOVING: "MOVING",
  DYING: "DYING",
  INCREASE: "INCREASE",
}

const createCell = (x, y, value, id) => ({
  x,
  y,
  value,
  id: id || uniqueId(),
  state: cellStates.IDLE
});

export { createCell, cellStates };
