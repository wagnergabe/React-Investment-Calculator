import { useState } from "react";
import Input from "./components/Input.jsx";
import Results from './components/Results.jsx';

function App() {
  const [initialInvestment, setinitialInvestment] = useState(150000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [expectedReturn, setReturn] = useState(6);
  const [duration, setDuration] = useState(10);


  const validInput = duration >= 1;

  function handleInvestment(e) {
    setinitialInvestment(prev => (prev, +e.target.value))
  }

  function handleAnnualInvestment(e) {
    setAnnualInvestment(prev => (prev, +e.target.value));
  }

  function handleReturns(e) {
    setReturn(prev => (prev, +e.target.value));
  }

  function handleDuration(e) {
    setDuration(prev => (prev, +e.target.value));
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
      {validInput ? <Results  initialInvestment = {initialInvestment}
        annualInvestment = {annualInvestment}
        expectedReturn = {expectedReturn}
        duration = {duration}/> :
        <p style={{ textAlign: "center" }}>Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
