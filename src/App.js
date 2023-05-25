import { useState, useEffect } from "react";
import Time from "./Components/Time/Time";
import './styles.css';

const App = () => {
  let [time, setTime] = useState(0);
  let [timer, setTimer] = useState(null);
  console.log(timer);


const updateTime = () => {
  setTime(prevValue => prevValue + 1);
}
  const start = () => {
    if (!timer) {
    setTimer(setInterval(updateTime, 1))
    }
  }; 

  const stop = () => {
    clearInterval(timer);
  }; 

  const reset = () => {
    setTime(0);
    setTimer(0);
  }
  
  useEffect(() => {
    return () => {
        if(timer) clearInterval(timer);
    };
  }, []);


  return (
    <div className="box">
      <p className="time">{Time(time)}</p>
      <div>
        <button className="button" onClick={start}>START</button>
        <button className="button" onClick={stop}>STOP</button>
        <button className="button" onClick={reset}>RESET</button>
      </div>
    </div>
  );
}


export default App;
