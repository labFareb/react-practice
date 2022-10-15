import { useEffect, useState } from "react";
import './App.css';

const Timer = () => {
  const [time, setTime] = useState(`0:0:0`);

  // Handle effects
  const handleEffect = () => {
    setInterval(() => {
      let currentTime = new Date();
      setTime(`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`);
    }, 1000);
  };
  useEffect(handleEffect, [time]);
  return (
    <div className="container time-piece">
      <p className="time-display">{time}</p>
    </div>
  );
};

function App() {
  return <Timer />;
}

export default App;
