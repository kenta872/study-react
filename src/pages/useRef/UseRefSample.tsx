import { useRef, useState } from "react";

const UseRefSample = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1>UseRefSample</h1>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default UseRefSample;
