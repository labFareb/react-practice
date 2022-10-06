import { useState } from "react";

const SearchParams = () => {
  const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  return (
    <div className="search-params">
      <label htmlFor="location">
        Location
        <input
          id="location"
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          value={location}
          placeholder="Location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          name="animal"
          id="animal"
          value={animal}
          onChange={(e) => setAnimal(e.target.value)}
          onBlur={(e) => setAnimal(e.target.value)}
        >
          <option />
          {
              ANIMALS.map(animal => (
                  <option value = {animal} key = {animal}>
                      {animal}
                  </option>
              ))
          }
        </select>
      </label>
      <button>Submit</button>
    </div>
  );
};

export default SearchParams;
