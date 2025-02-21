import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      // setCount(count + 1);
      setCount((prevState) => {
        var newState = prevState + 1;
        console.log(newState);
        return newState;
      });
    }, 2000);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={complexIncrease}>Next</button>
    </div>
  );
};

export default UseStateGotcha;
