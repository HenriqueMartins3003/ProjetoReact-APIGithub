import { useState } from "react";

const VoelCount = () => {
  const [inputWord, setInputWord] = useState("");
  const [numberVowel, setNumberVowel] = useState(0);

  const handleInputChange = (e) => {
    const cleanString = e.target.value;
    setInputWord(cleanString.trim());
  };

  const countVowel = () => {
    const vowel = /[aeiou]/gi;
    const count = inputWord.match(vowel);

    setNumberVowel(count ? count.length : 0);
  };

  return (
    <div className="container">
      <div>
        <h2>Vowel Count</h2>
        <input
          type="text"
          value={inputWord}
          onChange={handleInputChange}
          min={0}
        />
        <button onClick={countVowel}> Count </button>
        {numberVowel > 0 ? (
          <p>There is: {numberVowel} vowel in this word.</p>
        ) : (
          <p>No Vowels in this sentence</p>
        )}
      </div>
    </div>
  );
};

export default VoelCount;
