import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "coding",
  });
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("coding");
  const displayPerson = () => {
    setName("john");
    setAge(27);
    setHobby("reading");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show the other person
      </button>
    </>
  );
};

export default UseStateObject;
