// Number.js
import React from "react";

function Number({ guess, number }) {
let result;
if(guess>number){
  result="higher"
}
else if(guess<number){
  result="lower"
}
else{
  result="Correct"
}

  return(
   <h3>You Guessed {result}</h3>);
}

export default Number;
