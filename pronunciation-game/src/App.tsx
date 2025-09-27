import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {
  const [inputNum, setInputNum] = useState(0);
  const [data, setData] = useState({
    text: "nothing interesting came to pass",
    number: {inputNum},
  });


  const handleChange = () => {
    console.log("changed");
  }
  const options = {
    method: "GET",
    url: `https://numbersapi.p.rapidapi.com/${data.number}/year`,
    params: { json: "true", fragment: "true" },
    headers: {
      "X-RapidAPI-Key": "6fd01c6f9cmsh118e727ce4f37a5p140292jsn2a79f0b01615",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };
  // const options = {};

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log("Words API", response.data);
        setData(response.data);
        console.log("Object values", Object.values(response.data));
        console.log("Object keys", Object.keys(response.data));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <main className="container dashboard">
        <div className="dashboard__number">{data.number}</div>
        <div className="dashboard__text">{data.text}</div>
        <form>
          <input type="text" id="user-number-input" placeholder="1492" onChange={handleChange}/>
        </form>
      </main>
      <footer>
        <p>Credits:</p>
        <ul>
          <li>
            <a
              href="https://99designs.com/blog/creative-inspiration/color-combinations/"
              target="_blank"
              rel="noreferrer"
            >
              Colour Pairing
            </a>
          </li>
          <li>
              |
          </li>
          <li>
            <a
              href="https://heropatterns.com/"
              target="_blank"
              rel="noreferrer"
            >
              Background
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
