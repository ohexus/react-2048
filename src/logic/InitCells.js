import { createCell } from './cellManager';
import generateRandomCoord from '../helpers/generateRandomCoord';

const initCells = () => {
  const cell1 = createCell(generateRandomCoord(), generateRandomCoord(), 2);
  const cell2 = createCell(generateRandomCoord(), generateRandomCoord(), 2);

  if (cell1.x === cell2.x && cell1.y === cell2.y) {
    cell1.x = cell1.x === 0 ? 1 : cell1.x - 1;
  }

  return [cell1, cell2];
}

export default initCells;
