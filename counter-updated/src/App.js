import * as React from "react";
import "./App.css";
import { useState } from "react";

const Button = ({ action, className, id, handleClick }) => {
  return (
    <button
      id={id}
      className="counterApp__actions__btn"
      onClick={() => handleClick(action)}
    >
      {action}
    </button>
  );
};

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (action) => {
    // This is not working
    console.log(action);
    if (action === "+") {
      setCount(count + 1);
    } else if (action === "-") {
      setCount(count - 1);
    } else {
      setCount(0);
    }

    console.log("clicked", action);

    const audio = new Audio();
    audio.src = "https://www.fesliyanstudios.com/play-mp3/387";
    audio.play();
  };

  return (
    <>
      <main className="counterApp">
        <div className="counterApp__dashboard">{count}</div>
        <section className="counterApp__actions">
          <Button
            action="+"
            id="increment"
            className="counterApp__actions__btn"
            handleClick={handleClick}
          />
          <Button
            action="-"
            id="decrement"
            className="counterApp__actions__btn"
            handleClick={handleClick}
          />
          <Button
            action="reset"
            id="reset"
            className="counterApp__actions__btn"
            handleClick={handleClick}
          />
        </section>
      </main>
      <footer>
        <p>Credits:</p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=0R6rZngcHGg" target="_blank" rel="noreferrer">audio</a>
          </li>
          <li>
            <a href="https://www.svgbackgrounds.com/" target="_blank" rel="noreferrer">background</a>
          </li>
          <li>
            <a href="https://getcssscan.com/css-box-shadow-examples" target="_blank" rel="noreferrer">button</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
