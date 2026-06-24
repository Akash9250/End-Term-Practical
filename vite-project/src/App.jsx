import { useState } from "react";
import "./App.css";

function App() {
  const [letter, setLetter] = useState("");
  const [result, setResult] = useState("");

  const checkLetter = () => {
    const char = letter.toLowerCase();

    if (char.length !== 1 || !/[a-z]/.test(char)) {
      setResult("Please enter a single alphabet.");
      return;
    }

    if ("aeiou".includes(char)) {
      setResult(`${char.toUpperCase()} is a Vowel`);
    } else {
      setResult(`${char.toUpperCase()} is a Consonant`);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Vowel Checker</h1>

        <input
          type="text"
          maxLength="1"
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
          placeholder="Enter a letter"
        />

        <button onClick={checkLetter}>Check</button>

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default App;