/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

function Game({ verifyLetter }) {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação 000</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        dica sobre a palavra:
        {' '}
        <span>categoria</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare">x</span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas</p>
        <span>a,</span>
        <span>b,</span>
      </div>
      <button type="button" onClick={verifyLetter}>Verificar letra</button>
    </div>
  );
}

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
};

export default Game;
