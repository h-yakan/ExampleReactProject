import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };
  const clearAll = () => {
    setPeople([]);
    console.log("clear all");
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button onClick={clearAll} className="btn">
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
