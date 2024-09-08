import { useContext } from "react";
import { MyContext } from "./MyContext";

const SampleContext: React.FC = () => {
  const { state, setState } = useContext(MyContext);
  return (
    <div>
      <h2>SampleContext</h2>
      <p>Context State: {state}</p>
      <button onClick={() => setState(state + 1)}>
        Increment Context State
      </button>
    </div>
  );
};

export default SampleContext;
