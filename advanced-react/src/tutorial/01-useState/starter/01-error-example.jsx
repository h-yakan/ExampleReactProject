const ErrorExample = () => {
  let counter = 0;
  const HandleClick = () => {
    console.log("Button clicked");

    counter++;
    console.log(counter);
  };
  return (
    <div>
      <h2>useState error example. Counter:{counter}</h2>
      <button className="btn" onClick={HandleClick}>
        Click me
      </button>
    </div>
  );
};

export default ErrorExample;
