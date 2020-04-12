import { cloneDeep } from 'lodash';
import matrixRotate from 'matrix-rotate';

import { cellStates } from './cellManager';

const directions = {
  UP: 'UP',
  DOWN: 'DOWN',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
}

const moveCells = (propsCells, direction) => {
  const cells = cloneDeep(propsCells);

  const matrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  cells.forEach(cell => {
    matrix[cell.y][cell.x] = cell;
  })

  rotateMatrix(matrix, direction);

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (matrix[y][x] !== 0) {
        moveCell(matrix, x, y);
      }
    }
  }

  rotateMatrixBack(matrix, direction);

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (matrix[y][x] !== 0) {
        matrix[y][x].y = y;
        matrix[y][x].x = x;
      }
    }
  }

  cells.filter(cell => cell.by != null).forEach(cell => {
    cell.x = cell.by.x;
    cell.y = cell.by.y;
    delete cell.by;
  })

  return cells;
}

function moveCell(matrix, x, y) {
  let nextRow = y - 1;
  let currentRow = y;

  while (nextRow >= 0) {
    if (matrix[nextRow][x] === 0) {
      matrix[nextRow][x] = matrix[currentRow][x];

      matrix[currentRow][x].state = cellStates.MOVING;
      matrix[currentRow][x] = 0;

      currentRow = nextRow;
    } else {
      if (
        (matrix[nextRow][x].value === matrix[currentRow][x].value)
        && (
          matrix[nextRow][x].state === cellStates.IDLE
          || matrix[nextRow][x].state === cellStates.MOVING
        )
      ) {
        matrix[nextRow][x].state = cellStates.DYING;
        matrix[nextRow][x].by = matrix[currentRow][x];

        matrix[currentRow][x].state = cellStates.INCREASE;
        matrix[nextRow][x] = matrix[currentRow][x];
        matrix[currentRow][x] = 0;

        currentRow = nextRow;
      } else {
        break;
      }
    }

    nextRow -= 1;
  }
}

function rotateMatrix(matrix, direction) {
  switch (direction) {
    case directions.LEFT:
      matrixRotate(matrix);
      break;

    case directions.DOWN:
      matrixRotate(matrix);
      matrixRotate(matrix);
      break;

    case directions.RIGHT:
      matrixRotate(matrix);
      matrixRotate(matrix);
      matrixRotate(matrix);
      break;

    default:
      break;
  }
}

function rotateMatrixBack(matrix, direction) {
  switch (direction) {
    case directions.LEFT:
      matrixRotate(matrix);
      matrixRotate(matrix);
      matrixRotate(matrix);
      break;

    case directions.DOWN:
      matrixRotate(matrix);
      matrixRotate(matrix);
      break;

    case directions.RIGHT:
      matrixRotate(matrix);
      break;

    default:
      break;
  }
}

export { moveCells, directions }
