import React from "react";
import GuessList from "../GuessList"
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {checkGuess} from "../../game-helpers"


function GuessInput({answer}) {
  const [gameOver, setGameOver] = React.useState(false)
  const [isMatch, setIsMatch] = React.useState(false);
  const [guess, setGuess] = React.useState('');
  const [guessCount,setGuessCount] = React.useState(0);
  const [guessList, setGuessList] = React.useState((() => {
     return Array(6).fill([
    { letter: ' ', status: '' },
    { letter: ' ', status: '' },
    { letter: ' ', status: '' },
    { letter: ' ', status: '' },
    { letter: ' ', status: '' },
  ])
  }))



  function submitHandler(event) {
    event.preventDefault();

    
    if(gameOver) return;
    if (guess.length !== 5){
      window.alert('Enter exactly 5 characters')
      return
    }
    if(guess === answer){
      setIsMatch(true);
      setGameOver(true)
    } else if (guessCount === NUM_OF_GUESSES_ALLOWED ) {
      setIsMatch(false)
      setGameOver(true)
    }
       
     
    // debugger;
    console.log(guess);
    const checkedGuess = checkGuess(guess,answer)

    const newGuessList = [...guessList]
    newGuessList[guessCount] = checkedGuess
    setGuessList(newGuessList)
    setGuessCount(guessCount + 1)
    console.log(newGuessList)
    setGuess('');

  }
  return (


  <>
    <GuessList guessList={guessList} />  
     <form 
      className="guess-input-wrapper"
      onSubmit={submitHandler}
     >
      <label htmlFor="guess-input">
      Enter guess:
        <input 
          type="text" 
          name="guess"
          value={guess}
          id="guess-input" 
          minLength={5}
          maxLength={5}
          onChange={(event) => { 
            console.log('onChange guess count is ' + guessCount)
            if( guessCount === 6) return;
            const newGuess=event.target.value.toUpperCase()
            setGuess(newGuess)
          }}
        />
      </label>
    </form>
    {isMatch  
      && <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessCount} guesses</strong>.
          </p>
         </div>
    }
    {!isMatch && guessCount === NUM_OF_GUESSES_ALLOWED &&
    <div className="sad banner">
          <p>
            <strong>No match!</strong> 
            <strong> Word is {answer} </strong>.
          </p>
         </div>
    }
  </>
  )
}

export default GuessInput;
