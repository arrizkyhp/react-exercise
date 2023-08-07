import { useRef } from "react";

const Test3 = () => {
  const ref = useRef(null);

  const handleClick = () => ref.current.focus();

  return (
    <div>
      <ul>
        <li>Please focus to the text field when user click the focus button</li>
      </ul>
      <p>
        <button onClick={handleClick} type="button">
          Focus Text Field
        </button>
      </p>
      <input ref={ref} type="text" placeholder="focus me" />
    </div>
  );
};

export default Test3;
