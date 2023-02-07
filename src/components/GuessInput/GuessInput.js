import React from "react";
import GuessList from "../GuessList"


function GuessInput() {
  
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([])

  function submitHandler(event) {
    event.preventDefault();

    if (guess.length !== 5){
      window.alert('Enter exactly 5 characters')
      return
    }
    console.log({guess});
    const newGuessList = [...guessList,guess]
    setGuessList(newGuessList)
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
