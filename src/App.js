import React, { useState } from "react";
import text from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  return (
    <div>
      <h4>RemSum Generator</h4>
      {console.log(text)}
    </div>
  );
}

export default App;
