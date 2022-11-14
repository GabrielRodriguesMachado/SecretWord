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

  const handleStartGame = () => {
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
      {console.log(words)}
    </div>
  );
}

export default App;
