import { useState } from "react";
import Input from "./components/Input.jsx";

function App() {
  const [initialInvestment, setinitialInvestment] = useState(150000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [expectedReturn, setReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function handleInvestment(e) {
    setinitialInvestment((prevUserInput) => {
      prevUserInput + e.target.value;
    });
  }

  function handleAnnualInvestment(e) {
    setAnnualInvestment((prevUserInput) => {
      prevUserInput + e.target.value;
    });
  }

  function handleReturns(e) {
    setReturn((prevUserInput) => {
      prevUserInput + e.target.value;
    });
  }

  function handleDuration(e) {
    setDuration((prevUserInput) => {
      prevUserInput + e.target.value;
    });
  }

  return (
    <>
      <h1>React Investment Calculator</h1>
      <Input
        onHandleInvestment={handleInvestment}
        onHandleAnnual={handleAnnualInvestment}
        onHandleReturn={handleReturns}
        onHandleDuration={handleDuration}
        initialInvestment = {initialInvestment}
        annualInvestment = {annualInvestment}
        expectedReturn = {expectedReturn}
        duration = {duration}
        // need to consolidate this somehow....
      />
    </>
  );
}

export default App;
