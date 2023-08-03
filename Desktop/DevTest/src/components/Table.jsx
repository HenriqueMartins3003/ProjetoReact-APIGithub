import { useState } from "react";

const Table = () => {
  const [inputNum, setInputNum] = useState("");
  const [dataTable, setDataTable] = useState([]);

  const handleInputChange = (e) => {
    setInputNum(e.target.value);
  };

  const createTable = () => {
    const num = parseInt(inputNum);
    if (isNaN(num)) {
      setDataTable([]);
      return alert("Number invalid!!");
    } else {
      const table = [];
      for (let i = 1; i <= 10; i++) {
        table.push(`${num} X ${i} = ${num * i}`);
      }
      setDataTable(table);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Table Generator</h2>
        <input
          type="number"
          value={inputNum}
          onChange={handleInputChange}
          min={0}
        />
        <button onClick={createTable}>Create Table</button>
        {dataTable.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Multiplicand</th>
                <th>Multiplier</th>
                <th>Product</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.map((item, index) => (
                <tr key={index}>
                  <td>{inputNum}</td>
                  <td>{index + 1}</td>
                  <td>{item.split("=")[1].trim()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
