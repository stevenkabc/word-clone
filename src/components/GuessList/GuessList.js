import React from "react";

function GuessList({guessList}) {
  return (
      <div className="guess-results">
        { 
          guessList.map(guess => {
            return (
            <p className="guess"
              key={crypto.randomUUID()}              
            >
             {Array.from(guess).map((cell) => {
              return (
                <span className="cell">
                  {cell}
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
