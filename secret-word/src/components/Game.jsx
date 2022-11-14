/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Game({ verifyLetter }) {
  return (
    <div>
      <h1>Game</h1>
      <button type="button" onClick={verifyLetter}>Verificar letra</button>
    </div>
  );
}

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
};

export default Game;
