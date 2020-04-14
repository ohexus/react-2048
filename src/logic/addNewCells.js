import { createCell } from './cellManager'
import generateRandomCoord from '../helpers/generateRandomCoord';
import uniqueSum from '../helpers/uniqueSum';

const fourChance = 0.15;

export default function addNewCells(cells) {
  const occupiedCoords = new Set();

  cells.forEach(cell =>
    occupiedCoords.add(uniqueSum(cell.x, cell.y)));

  const startSize = occupiedCoords.size;
  let x;
  let y;

  // generate only unique coords
  while (startSize === occupiedCoords.size) {
    x = generateRandomCoord();
    y = generateRandomCoord();

    occupiedCoords.add(uniqueSum(x, y));
  }

  return [...cells, createCell(x, y, Math.random() < fourChance ? 4 : 2)];
}
