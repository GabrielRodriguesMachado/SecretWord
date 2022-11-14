/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function GameOver({ restartGame }) {
  return (
    <div>
      <h1>Game Over</h1>
      <button type="button" onClick={restartGame}>Reiniciar o jogo</button>
    </div>
  );
}

GameOver.propTypes = {
  restartGame: PropTypes.func.isRequired,
};

export default GameOver;
