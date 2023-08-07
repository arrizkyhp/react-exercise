import { useState } from "react";
import { css } from "react-emotion";

const cssLabel = css({
  display: "inline-block",
  margin: "4px 0px",
  padding: "2px 8px",
  backgroundColor: "#e0e0e0",
  borderRadius: 8,
  button: {
    backgroundColor: "transparent",
    color: "red",
    marginLeft: 4,
    fontSize: 22,
    padding: 0,
    border: "none",
    outline: "none",
  },
});

const Label = ({ value, setInputValue }) => {
  const [isHover, setIsHover] = useState(false);

  console.log(isHover);

  return (
    <span
      className={cssLabel}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {value || "Label"}
      {isHover && value && (
        <button
          type="button"
          onClick={() => setInputValue("")}
          style={{ cursor: "pointer" }}
        >
          ⊗
        </button>
      )}
    </span>
  );
};

export default Label;
