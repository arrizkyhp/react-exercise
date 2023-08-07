import { useState } from "react";

const Input = ({ setInputValue }) => {
  const [val, setVal] = useState("");

  const handleInputValue = () => {
    setInputValue(val);
  };

  return (
    <form>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="search"
      />
      <button onClick={handleInputValue} type="button">
        🔍
      </button>
    </form>
  );
};

export default Input;
