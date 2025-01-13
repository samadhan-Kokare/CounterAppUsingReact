import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  let handleStart = () => {
    setIsRunning(true);
  };

  let handleStop = () => {
    setIsRunning(false);
  };

  let handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p id="counters">
        Counter is <span>{count}</span>
      </p>
      <button id="start" onClick={handleStart}>
        start
      </button>
      <br />
      <br />
      <button id="stop" onClick={handleStop}>
        stop
      </button>
      <br />
      <br />
      <button id="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
