import "./App.css";

function App() {
  return (
    <div className="root">
      <h1>Counter</h1>
      <p id="count">0</p>
      <button onClick={handleCountUp}>+</button>
      <button onClick={handleCountDown}>-</button>
    </div>
  );
}

const handleCountUp = () => {
  let count = document.getElementById("count");
  count.innerText++;
}

const handleCountDown = () => {
  let count = document.getElementById("count");
  count.innerText--;
}

export default App;
