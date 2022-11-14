/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './StartScreen.css';
import PropTypes from 'prop-types';

function StartScreen({ handleStartGame }) {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button type="button" onClick={handleStartGame}>Começar o jogo</button>
    </div>
  );
}

StartScreen.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
};

export default StartScreen;
