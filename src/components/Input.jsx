import { useState } from "react";

function Input() {
  const [initialInvestment, setinitialInvestment] = useState(150000);
  const [annualInvestment, setAnnualInvestment] = useState(1000);
  const [expectedReturn, setReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function handleInvestment(e) {
    setinitialInvestment(prevUserInput => {
        prevUserInput + e.target.value;
    });
  }

  function handleAnnualInvestment(e) {
    setAnnualInvestment(prevUserInput => {
        prevUserInput + e.target.value
    })
  };

  function handleReturns(e) {
    setReturn(prevUserInput => {
        prevUserInput + e.target.value
    })
  };

  function handleDuration(e)  {
    setDuration(prevUserInput => {
        prevUserInput + e.target.value
    })
  }

  return (
    <section id="user-input">
      <div class="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number" required
            value={initialInvestment}
            onChange={handleInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required
          value={annualInvestment}
          onChange={handleAnnualInvestment}/>
        </p>
      </div>
      <div class="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required
           value={expectedReturn}
           onChange={handleReturns}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required
           value={duration}
           onChange={handleDuration}
          />
        </p>
      </div>
    </section>
  );
}

export default Input;
