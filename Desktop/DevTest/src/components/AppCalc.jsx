import { useState } from "react";

const AppCalc = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const mathOperation = () => {
    if (operator === "+") {
      setResult(num1 + num2);
      setOperator("");
    } else if (operator === "-") {
      setResult(num1 - num2);
      setOperator("");
    } else if (operator === "/") {
      setResult(num1 / num2);
      setOperator("");
    } else if (operator === "*") {
      setResult(num1 * num2);
      setOperator("");
    } else {
      alert("selecione um operador");
      return;
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <h2>Calculator</h2>
          <form>
            <label htmlFor="firstNumber"> First Num:</label>
            <input
              type="number"
              name="firstNumber"
              value={num1}
              onChange={(e) => setNum1(Number(e.target.value))}
            />
            <label htmlFor="operator">Operator</label>
            <select
              name="operator"
              onChange={(e) => setOperator(e.target.value)}
            >
              <option> </option>
              <option> + </option>
              <option> - </option>
              <option> / </option>
              <option> * </option>
            </select>
            <label htmlFor="secondNumber"> Second Num:</label>
            <input
              type="number"
              name="secondNumber"
              value={num2}
              onChange={(e) => setNum2(Number(e.target.value))}
            />
          </form>
          <button onClick={mathOperation}> = </button>
          <label htmlFor="">Result {result}</label>
        </div>
      </div>
    </>
  );
};

export default AppCalc;
