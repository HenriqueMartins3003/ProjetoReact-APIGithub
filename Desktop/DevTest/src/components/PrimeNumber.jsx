import { useState } from "react";

function PrimeChecker() {
  const [number, setNumber] = useState("");
  const [isPrime, setIsPrime] = useState(null);

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

  const checkPrime = () => {
    const num = parseInt(number);
    if (isNaN(num)) {
      setIsPrime(null); // Invalid input, clear result
    } else {
      setIsPrime(isNumberPrime(num));
    }
  };

  const isNumberPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true;
    }
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="container">
      <div>
        <h2>Prime Number check</h2>
        <input type="text" value={number} onChange={handleInputChange} />
        <button onClick={checkPrime}>Check</button>
        {isPrime !== null && (
          <p>
            {isPrime
              ? `${number} is a prime Number.`
              : `${number} is not a prime Number.`}{" "}
            The firts 10 prime numbers are 2,3,5,7,11,13,17
          </p>
        )}
      </div>
    </div>
  );
}

export default PrimeChecker;
