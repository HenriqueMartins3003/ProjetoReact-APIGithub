import { useState } from "react";

const Factorial = () => {
  const [inputNum, setInputNum] = useState("");
  const [factorial, setFactorial] = useState();

  const handleInputChange = (e) => {
    setInputNum(e.target.value);
  };

  const calculateFactorial = () => {
    const num = parseInt(inputNum);
    if (num < 0) {
      setFactorial(null);
      return alert("Inavalid Number");
    } else {
      setFactorial(getFactorial(num));
    }
  };

  const getFactorial = (num) => {
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * getFactorial(num - 1);
  };
  return (
    <div className="container">
      <div>
        <h2>Factorial Number check</h2>
        <input type="text" value={inputNum} onChange={handleInputChange} />
        <button onClick={calculateFactorial}>Calculate</button>
        {factorial !== null && (
          <p>
            The Factorial of {inputNum} is {factorial}
          </p>
        )}
      </div>
    </div>
  );
};

export default Factorial;
