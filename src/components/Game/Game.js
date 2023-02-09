import React from 'react';
import GuessInput from '../GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('')
  return ( 
  <>
    <GuessInput answer={answer} gameStatusHandler={setGameStatus} />
    {gameStatus === 'happy' && <div className="happy banner">
  <p>
    <strong>Congratulations!</strong> Got it in
    <strong>3 guesses</strong>.
  </p>
</div>}
    
  </>)

}

export default Game;
