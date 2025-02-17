import { useState } from "react";

const UseStateBasics = () => {
  console.log(useState());
  return <ErrorExample />;
};

const ErrorExample = () => {
  let counter = 0;
  let [count, setCount] = useState(0);

  const HandleClick = () => {
    console.log("Button clicked");
    setCount(count + 1);
  };
  const HandleClickToSıfırla = () => {
    console.log("Button clicked");
    setCount(0);
  };
  return (
    <div>
      <h2>useState error example. Counter:{count}</h2>
      <button className="btn" onClick={HandleClick}>
        Click me
      </button>
      <button className="btn" onClick={HandleClickToSıfırla}>
        Sıfırla
      </button>
    </div>
  );
};

export default UseStateBasics;
