import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // BATCHING
  // const addValue = () => {
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);
  //   setCounter(counter + 1);

  //   console.log(counter);
  // };

  // const removeValue = () => {
  //   setCounter(counter - 1);
  //   console.log(counter);
  // };

  // BATCHING CAN BE PREVENTED

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Increase + </button>
      <button onClick={() => setCounter(counter - 1)}>Decrease - </button>
      <p>footer : {counter} </p>
    </>
  );
}

export default App;
