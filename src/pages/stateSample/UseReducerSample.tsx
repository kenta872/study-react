type ChildProps = {
  reduceState: number;
  dispatch: React.Dispatch<{ arg1: string; arg2: number }>;
};
const UseReduceSample: React.FC<ChildProps> = ({ reduceState, dispatch }) => {
  const sampleReduceEvent = (arg: "pt1" | "pt2") => {
    dispatch({ arg1: arg, arg2: 2 });
  };
  return (
    <div>
      <h2>useReduce</h2>
      <p>reduceState: {reduceState}</p>
      <button onClick={() => sampleReduceEvent("pt1")}>Dispatch pt1</button>
      <button onClick={() => sampleReduceEvent("pt2")}>Dispatch pt2</button>
    </div>
  );
};

export default UseReduceSample;
