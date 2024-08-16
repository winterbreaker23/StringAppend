import React, { useState } from "react";
import './App.css';
import TextField from "./components/textField"
import 'h8k-components';

const title = "Text Append";

function App() {
  const [firstText, setFirstText] = useState('');
  const [secondText, setSecondText] = useState('');

  // Event handlers to update state when the input fields change
  const handleFirstTextChange = (e) => {
    setFirstText(e.target.value);
  };

  const handleSecondTextChange = (e) => {
    setSecondText(e.target.value);
  };

  // Appending the two texts
  const appendedText = `${firstText} ${secondText}`;

  return (
    <div>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={'First Text'} onChange={handleFirstTextChange} />
          </div >
          <div data-testid="second-text">
            <TextField labelText={'Second Text'} onChange={handleSecondTextChange} />
          </div>
          <label className="mt-50 text-align-center">
            Appended Text is: 
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {appendedText}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
