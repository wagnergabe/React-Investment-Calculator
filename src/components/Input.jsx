function Input({onHandleInvestment, onHandleAnnual, onHandleReturn, onHandleDuration, initialInvestment, annualInvestment, expectedReturn, duration}) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number" required
            value={initialInvestment}
            onChange={onHandleInvestment}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required
          value={annualInvestment}
          onChange={onHandleAnnual}/>
        </p>
      </div>
      <div class="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required
           value={expectedReturn}
           onChange={onHandleReturn}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required
           value={duration}
           onChange={onHandleDuration}
          />
        </p>
      </div>
    </section>
  );
}

export default Input;
