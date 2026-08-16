import { useState } from "react";

const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
export default function App() {
  const day = new Date().getDay();
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  console.log(day, date, month, year);

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleIncrement() {
    setCount((c) => c + step);
  }

  function handleDecrement() {
    if (count > 1) setCount((c) => c - step);
  }
  function handleStepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleStepIncrement() {
    setStep((s) => s + 1);
  }

  return (
    <div className="App">
      <div className="container">
        <button className="btn" onClick={handleStepDecrement}>
          -
        </button>
        <p>Step : {step}</p>
        <button className="btn" onClick={handleStepIncrement}>
          +
        </button>

        <p> --- </p>

        <button className="btn" onClick={handleDecrement}>
          -
        </button>
        <p>Count : {count}</p>
        <button className="btn" onClick={handleIncrement}>
          +
        </button>
      </div>
      <h3 className="message">{`Today is ${weekDays[day]} ${months[month]} ${date}, ${year}`}</h3>
    </div>
  );
}
