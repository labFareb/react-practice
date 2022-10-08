import "./App.css";
import { useState } from "react";

const Filter = ({ state, name, setTempList }) => {
  const handleClick = () => {
    if (name === "everything") {
      setTempList(state);
    } else {
      setTempList(
        state.filter((card) => {
          return card.tags.includes(name);
        })
      );
    }
  };
  return (
    <button className="app__filters__filter" onClick={handleClick}>
      <p>{name}</p>
    </button>
  );
};

function Filters({ state, setState, tempList, setTempList }) {
  const filters = [
    "everything",
    "building",
    "tree",
    "art",
    "river",
    "boat",
    "mountain",
  ];
  return (
    <section className="app__filters">
      {filters.map((filter) => (
        <Filter
          state={state}
          name={filter}
          setTempList={setTempList}
          key={filter}
        />
      ))}
    </section>
  );
}

const Card = (props) => {
  return (
    <article className="app__dashboard__card">
      <img src={props.src} alt="card" />
      <h3>{props.name}</h3>
      <p>{props.details}</p>
    </article>
  );
};

const Dashboard = ({ state, tempList }) => {
  console.log(tempList);
  return (
    <section className="app__dashboard">
      {tempList.map((card) => (
        <Card
          name={card.name}
          src={card.src}
          details={card.details}
          key={card.name}
        />
      ))}
    </section>
  );
};

export default function App() {
  const [state, setState] = useState([
    {
      name: "Varkala",
      src: "https://images.unsplash.com/photo-1621788549380-fd64ec0e3b7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["boat", "river"],
    },
    {
      name: "Snow covered palms",
      src: "https://images.unsplash.com/photo-1541958409-7618fd1ad26e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["tree", "river"],
    },
    {
      name: "Kathakali",
      src: "https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["art"],
    },
    {
      name: "Theyyam",
      src: "https://images.unsplash.com/photo-1551945025-ccf5e46bc2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["art"],
    },
    {
      name: "Nanthancodu",
      src: "https://images.unsplash.com/photo-1644773182167-0d302480d813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["building"],
    },
    {
      name: "Arecaceae",
      src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["boat", "river", "tree"],
    },
    {
      name: "Backwaters",
      src: "https://images.unsplash.com/photo-1563279036-8ae92c62ca4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["river"],
    },
    {
      name: "Wayanad",
      src: "https://images.unsplash.com/photo-1614221905934-dabe8c9005cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["tree", "mountain"],
    },
    {
      name: "Kuttikkanam",
      src: "https://images.unsplash.com/photo-1589983846997-04788035bc83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      details:
        "Kerala landscape with beautiful palm trees alongside a clean river",
      tags: ["tree", "mountain", "building"],
    },
  ]);
  const [tempList, setTempList] = useState(state);

  return (
    <>
      <header>
        <h1>Kerala</h1>
      </header>
      <main className="app container">
        <Filters
          state={state}
          setState={setState}
          tempList={tempList}
          setTempList={setTempList}
        />
        <Dashboard state={state} tempList={tempList} />
      </main>
      <footer>
        <p>Credits:</p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=0R6rZngcHGg">audio</a>
          </li>
          <li>
            <a href="https://www.svgbackgrounds.com/">background</a>
          </li>
          <li>
            <a href="https://getcssscan.com/css-box-shadow-examples">button</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
