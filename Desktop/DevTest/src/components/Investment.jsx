import { useState } from "react";

const Investment = () => {
  const [initialCapital, setInitialCapital] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [investmentTime, setInvestmentTime] = useState("");
  const [finalValue, setFinalValue] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (!isNaN(value)) {
      if (name === "initialCapital") setInitialCapital(value);
      else if (name === "interestRate") setInterestRate(value);
      else if (name === "investmentTime") setInvestmentTime(value);
    }
  };

  const calculateFinalValue = () => {
    const capital = parseFloat(initialCapital);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(investmentTime);

    if (isNaN(capital) || isNaN(rate) || isNaN(time) || rate < 0 || time < 0) {
      alert(
        "Please enter valid values for initial capital, interest rate, and investment time."
      );
      return;
    }

    const finalValue = capital * (1 + rate) ** time;
    setFinalValue(finalValue.toFixed(2));
  };

  return (
    <div className="container">
      <div>
        <h2>Investment Calculator</h2>
        <form>
          <label htmlFor="initialCapital">Initial Capital:</label>
          <input
            type="number"
            id="initialCapital"
            name="initialCapital"
            value={initialCapital}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={interestRate}
            onChange={handleInputChange}
            required
          />
          <br />

          <label htmlFor="investmentTime">Investment Time (months):</label>
          <input
            type="number"
            id="investmentTime"
            name="investmentTime"
            value={investmentTime}
            onChange={handleInputChange}
            required
          />
          <br />

          <button type="button" onClick={calculateFinalValue}>
            Calculate Final Value
          </button>
        </form>

        {finalValue !== "" && (
          <div>
            <p>The final value of the investment is: {finalValue}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Investment;
