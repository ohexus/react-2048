import { cellStates } from './cellManager';

export default function increaseAndKillCells(cells, score, setScore) {
  return cells.filter(cell => cell.state !== cellStates.DYING).map(cell => {
    if (cell.state === cellStates.INCREASE) {
      cell.value *= 2;
      setScore(score + cell.value);
    }

    cell.state = cellStates.IDLE;

    return cell;
  });
}
