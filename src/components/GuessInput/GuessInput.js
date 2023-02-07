import React from "react";
import GuessList from "../GuessList"
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'


function GuessInput() {
  
  const [guess, setGuess] = React.useState('');
  const [guessCount,setGuessCount] = React.useState(0)
  const [guessList, setGuessList] = React.useState((() => {
     return Array(6).fill("     ")
  }))

  function submitHandler(event) {
    event.preventDefault();

    if (guess.length !== 5){
      window.alert('Enter exactly 5 characters')
      return
    }

    if(guessCount === NUM_OF_GUESSES_ALLOWED ) {
      window.alert("Maximum guesses already entered")
      return
    }
    console.log({guess});
    const newGuessList = [...guessList]
    newGuessList[guessCount] = guess
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
            if( guessCount === 6) return;
            const newGuess=event.target.value.toUpperCase()
            setGuess(newGuess)
          }}
        />
      </label>
    </form>
  </>
  )
}

export default GuessInput;