import React from "react";

function GuessList({guessList, answer}) {
  return (
      <div className="guess-results">
        { 
          guessList.map(guessResult => {
            return (
            <p className="guess"
              key={crypto.randomUUID()}              
            >
             {guessResult.map((g) => {
              return (
                <span key={crypto.randomUUID()} className={`cell ${g.status}`}>
                  {g.letter}
                </span>
              )
             })
             
             }
            </p>
          )})
        }
        
      </div>
  )
}

export default GuessList;
