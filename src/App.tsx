import { useState } from "react";
import "./App.css";

let clearedTime: any = undefined;
let secondZero: any = undefined;
let minuteZero: any = undefined;
let HourZero: any = undefined;
function App() {
  const [second, setSecond] = useState(0);
  const [disable, setDisable] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  const startButton = () => {
    clearedTime = setInterval(() => {
      setSecond((x) => x + 1);
    }, 1000);
    setDisable(true);
  };

  const stopButton = () => {
    clearInterval(clearedTime);
    setDisable(false);
  };

  const resetButton = () => {
    setSecond(0);
    setMinutes(0);
    setHour(0);
    clearInterval(clearedTime);
    setDisable(false);
  };

  if (second == 60) {
    setMinutes(minutes + 1);
    setSecond(0);
  } else if (minutes == 60) {
    setHour(hour + 1);
    setMinutes(0);
  }

  if (second <= 9) {
    secondZero = 0;
  } else {
    secondZero = undefined;
  }

  if (minutes <= 9) {
    minuteZero = 0;
  } else {
    minuteZero = undefined;
  }

  if (hour <= 9) {
    HourZero = 0;
  } else {
    HourZero = undefined;
  }

  return (
    <div className="App">
      <h1 className="name">Start Stop Watch</h1>
      <div style={{ fontSize: "50px" }}>
        <div>
          <a style={{ color: "red" }}>
            {HourZero} {hour} :
          </a>
          <a style={{ color: "red" }}>
            {minuteZero} {minutes} :
          </a>
          <a style={{ color: "red" }}>
            {" "}
            {secondZero} {second}
          </a>
        </div>

        <button disabled={disable} className="start" onClick={startButton}>
          Start
        </button>
        <button className="stop" onClick={stopButton}>
          Stop
        </button>
        <button className="reset" onClick={resetButton}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
