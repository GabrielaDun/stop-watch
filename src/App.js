import { useState, useEffect } from "react";
import Time from "./Components/Time/Time";

const App = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

const updateTime = () => {
  setTime(prevValue => prevValue + 1);
}

console.log(timer);
  const start = () => {
    setTimer(setInterval( updateTime, 1))
  }; 



  // setInterval (function that updates time, time in milseconds)
  // function that updates time :
  //  () => {
  //setTime(prevValue => prevValue + 1) 
  // }
  
  useEffect(() => {
    return () => {
        if(timer) clearInterval(timer);
        console.log('stoop');
    };
  }, []);


  return (
    <div>
      <p>{Time(time)}</p>
      <button onClick={start}>START</button>
      <button onClick={clearInterval(start)}>STOP</button>
      <button >RESET</button>
    </div>
  );
}


export default App;
