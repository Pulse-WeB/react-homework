import { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  function startTimer() {
    setIsRunning(true);
  }
  function stopTimer() {
    setIsRunning(false);
  }
  function resetTimer() {
    setTime(0);
    setIsRunning(false);
  }
  useEffect(() => {
    if (isRunning === true) {
      const interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  return (
    <>
      <h2>{time}</h2>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

export default Timer;
