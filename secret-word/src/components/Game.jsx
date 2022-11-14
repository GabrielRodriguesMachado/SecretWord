/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  func, string, array, number,
} from 'prop-types';
import './Game.css';

function Game({
  verifyLetter, word, wordLetters, wordCategory, guessedLetters, wrongLetters, guesses, points,
}) {
  return (
    <div className="game">
      {console.log(word, wordLetters, guessedLetters, wrongLetters)}
      <p className="points">
        <span>
          Pontuação:
          {' '}
          {points}
        </span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        dica sobre a palavra:
        {' '}
        <span>{wordCategory}</span>
      </h3>
      <p>
        Você ainda tem
        {' '}
        {guesses}
        {' '}
        tentativas
      </p>
      <div className="wordContainer">
        {wordLetters.map((letter) => (
          guessedLetters.includes(letter)
            ? <span className="letter" key={letter}>{letter}</span>
            : <span className="blankSquare" key={letter} />
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button type="button" onClick={verifyLetter}>Verificar letra</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas</p>
        {wrongLetters.map((letter) => (
          <span className="wrongLetter" key={letter}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

Game.propTypes = {
  verifyLetter: func,
  word: string,
  wordLetters: array,
  wordCategory: string,
  guessedLetters: array,
  wrongLetters: array,
  guesses: number,
  points: number,

}.isrequired;

export default Game;
