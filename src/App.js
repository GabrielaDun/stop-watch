import { useState, useEffect } from "react";
import Time from "./Components/Time/Time";

const App = () => {
  let [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);


const updateTime = () => {
  setTime(prevValue => prevValue + 1);
}
  const start = () => {
    setTimer(setInterval(updateTime, 1))
  }; 

  // setInterval (function that updates time, time in milseconds)

  const stop = () => {
    clearInterval(timer);
  }; 

  const reset = () => {
    setTime(0);
    console.log(setTime);
  }
  
  useEffect(() => {
    return () => {
        if(timer) clearInterval(timer);
    };
  }, []);


  return (
    <div>
      <p>{Time(time)}</p>
      <button onClick={start}>START</button>
      <button onClick={stop}>STOP</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
}


export default App;
