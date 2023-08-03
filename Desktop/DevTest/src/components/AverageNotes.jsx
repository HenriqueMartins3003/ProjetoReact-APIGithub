import { useState } from "react";

const AverageNotes = () => {
  const [grades, setGrades] = useState([null, null, null]);
  const [average, setAverage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const index = parseInt(name);

    if (!isNaN(value)) {
      const newGrades = [...grades];
      newGrades[index] = parseFloat(value);
      setGrades(newGrades);
    }
  };

  const calculateAverage = () => {
    const validGrades = grades.filter((grade) => !isNaN(grade));
    if (validGrades.length !== 3) {
      alert("Please enter valid grades for all subjects.");
      return;
    }

    const avg =
      validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
    setAverage(avg.toFixed(2));
  };

  return (
    <div className="container">
      <div>
        <h2>Student Grade Average Calculator</h2>
        <form>
          {grades.map((grade, index) => (
            <div key={index}>
              <label htmlFor={index}>Subject {index + 1}:</label>
              <input
                type="number"
                id={index}
                name={index}
                value={grade !== null ? grade : ""}
                onChange={handleInputChange}
                required
              />
              <br />
            </div>
          ))}

          <button type="button" onClick={calculateAverage}>
            Calculate Average
          </button>
        </form>

        {average !== null && (
          <div>
            <p>The average grade is: {average}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AverageNotes;
