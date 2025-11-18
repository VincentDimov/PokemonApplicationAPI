import React, { useState } from "react";
import PokemonApplication from "./components/PokemonApplication";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);

  return (
      <div className="app">
        
      <h1>Pokemon Application</h1>

        {!start ? (
          <button className="start-btn" onClick={() => setStart(true)}>
            Start Pokemon App
          </button>
        ) : (
          <PokemonApplication />
        )}
      </div>
  );
}

export default App