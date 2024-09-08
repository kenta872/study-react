import { useRef, forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

const ForwardSample = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <div>
      <h1>ForwardSample</h1>
      <Input ref={inputRef} />
      <button type="button" onClick={handleFocus}>
        ForwardRefFocus
      </button>
    </div>
  );
};

export default ForwardSample;
