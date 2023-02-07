import React from "react";

function GuessList({guessList}) {
  return (
      <div className="guess-results">
        {
          guessList.map(guess => {
            return (
            <p 
              key={crypto.randomUUID()} 
              className="guess"
            >
             {guess}
            </p>
          )})
        }
        
      </div>
  )
}

export default GuessList;
