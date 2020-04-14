import uniqueSum from "./uniqueSum";

// only 16 tiles
export default function checkIsGameOver(cells) {
  const sortedCells = [...cells].sort((a, b) => {
    // y first for correct matrix fill
    return uniqueSum(a.y, a.x) - uniqueSum(b.y, b.x);
  });

  const matrix = [
    sortedCells.splice(0, 4),
    sortedCells.splice(0, 4),
    sortedCells.splice(0, 4),
    sortedCells.splice(0, 4),
  ];

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      const value = matrix[y][x].value;

      if (value === ((y - 1 < 0) ? null : matrix[y - 1][x].value)
        || value === ((y + 1 >= 4) ? null : matrix[y + 1][x].value)
        || value === ((x - 1 < 0) ? null : matrix[y][x - 1].value)
        || value === ((x + 1 >= 4) ? null : matrix[y][x + 1].value)
      ) {
        return false;
      }
    }
  }

  return true;
}
