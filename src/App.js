import React, { useState } from "react";
import text from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log('Function invoked')
  }

  return (
    <section className="section-center">
      <h3>RemSem Text Generator</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
      <label  htmlFor="amount">
        Paragraphs: 
      </label>
      <input type="text" name="amount" id="amount" value={count} onChange={(e)=> {setCount(e.target.value)}}></input>
      </form>
      <button type="submit" className="btn">generate</button>
      <article className="lorem-text">
        <p> Generated text here
        </p>
      </article>
    </section>
  );
}

export default App;
