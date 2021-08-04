import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    let amount = parseInt(count)

    if(count  <= 0)
    {
      amount = 1;
    } 
    if(count > data.length - 1){
      amount = 9;
    }
    setText(data.slice(0, amount));
    }


  return (
    <section className="section-center">
      <h3>RemSem Text Generator</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => {
            setCount(e.target.value);
          }}
        ></input>
     
      <button type="submit" className="btn">
        generate
      </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  );
}

export default App;
