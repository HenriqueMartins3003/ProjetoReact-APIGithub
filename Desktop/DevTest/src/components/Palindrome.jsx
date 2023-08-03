import { useState } from "react";

const Palindrome = () => {
  const [inputWord, setInputWord] = useState("");
  const [palindrome, setPalindrome] = useState(null);

  const handleInputChange = (e) => {
    setInputWord(e.target.value);
  };

  const checkPalindrome = () => {
    const cleanedStr = inputWord.replace(/\s+/g, "").toLowerCase();
    const len = cleanedStr.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
        setPalindrome(false);
        return;
      }
    }

    setPalindrome(true);
  };

  return (
    <div className="container">
      <div>
        <h2>Palindrome Word check</h2>
        <input type="text" value={inputWord} onChange={handleInputChange} />
        <button onClick={checkPalindrome}>Check</button>
        {palindrome !== null && (
          <p>
            {" "}
            {palindrome
              ? ` ${inputWord} Is a palindrome`
              : ` ${inputWord} Is not a palindrome`}
          </p>
        )}
      </div>
    </div>
  );
};

export default Palindrome;
