import { uniqueId } from 'lodash';

const createCell = (x, y, value, id) => ({
  x,
  y,
  value,
  id: id || uniqueId(),
});

export { createCell };
