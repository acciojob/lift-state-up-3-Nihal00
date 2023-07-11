
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [selectedOption, setSelectedOption] = useState("");

  

  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>

          <div className="child">
            <h2>Child Component 1</h2>
            <button onClick={() => setSelectedOption("Option 1")}>Option 1</button>
          </div>

          <div className="child">
            <h2>Child Component 2</h2>
            <button onClick={() => setSelectedOption("Option 2")}>Option 2</button>
          </div>

          <p>Selected Option: {selectedOption}</p>
        </div>
    </div>
  )
}

export default App
