// App.js
import './App.css';
import Number from './number';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState("");
  const [guess, setGuess] = useState(() => Math.floor(Math.random() * 10) + 1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
  };

  return (
    <div className="App">
      <div className="form_box">
        <form onSubmit={handleSubmit}>
          <label>
            Guess the number (1–10)<br />
            <input
              type="text"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                setSubmitted(false); 
              }}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        
        {submitted && (
          <Number guess={parseInt(number)} number={guess} />
        )}
      </div>
    </div>
  );
}

export default App;
