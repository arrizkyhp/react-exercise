const Input = ({ setInputValue, value }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => setInputValue(event.target.value)}
      placeholder="input here"
    />
  );
};

export default Input;
