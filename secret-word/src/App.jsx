import React, { useState } from 'react';
import './App.css';
import Game from './components/Game';
import GameOver from './components/GameOver';
import StartScreen from './components/StartScreen';
import wordsList from './data/words';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
];

function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [word, setWord] = useState('');
  const [wordCategory, setWordCategory] = useState('');
  const [wordLetters, setWordLetters] = useState([]);

  const pickWordAndCategory = () => {
    const categories = Object.keys(words);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    const randomWord = words[randomCategory][Math.floor(Math.random()
       * words[randomCategory].length)];

    return { randomWord, randomCategory };
  };

  const handleStartGame = () => {
    const { randomWord, randomCategory } = pickWordAndCategory();
    const getWordLetters = randomWord.toLowerCase().split('');

    setWord(randomWord);
    setWordCategory(randomCategory);
    setWordLetters(getWordLetters);

    setStage(stages[1].name);
  };

  const verifyLetter = () => {
    setStage(stages[2].name);
  };

  const restartGame = () => {
    setStage(stages[0].name);
  };

  return (
    <div className="App">
      {stage === 'start' && <StartScreen handleStartGame={handleStartGame} />}
      {stage === 'game' && <Game verifyLetter={verifyLetter} />}
      {stage === 'end' && <GameOver restartGame={restartGame} />}
    </div>
  );
}

export default App;
