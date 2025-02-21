import { useState } from "react";

const UseStateObject = () => {
  const persons = [
    {
      name: "peter",
      age: 24,
      hobby: "coding",
    },
    {
      name: "john",
      age: 27,
      hobby: "reading",
    },
  ];

  const [person, setPerson] = useState(persons[0]);
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("coding");
  const displayPerson = () => {
    setIndex((index + 1) % 2);
    console.log(index);
    console.log(persons[index]);
    setPerson(persons[index]);
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show the other person
      </button>
    </>
  );
};

export default UseStateObject;
