import React from 'react';
import './Description.scss';

export default function Description() {
  return (
    <div className="description">
      <p className="description__tutorial">
        <strong>How to play:</strong> Use your <strong>arrow keys</strong> or <strong>WASD</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
      </p>
      <hr></hr>
      <p className="description__content">
        This is my implementation of the popular game 2048. The game on <a href="http://git.io/2048">this site</a> is the original version of 2048 made by <a href="http://gabrielecirulli.com" target="_blank" rel="noreferrer noopener">Gabriele Cirulli.</a>.
      </p>
    </div>
  );
}
