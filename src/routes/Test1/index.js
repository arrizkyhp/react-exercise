import { useState } from "react";

const Test1 = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <ul>
        <li>Please render the inputted value</li>
      </ul>
      <p>
        <b>User Input: </b> {inputValue || "___"}
      </p>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        type="text"
        placeholder="input here"
      />
    </div>
  );
};

export default Test1;
