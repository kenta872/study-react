type ChildProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
const UseStateSample: React.FC<ChildProps> = ({ count, setCount }) => {
  const sampleEvent = () => setCount((prevState) => prevState + 1);
  return (
    <div>
      <div>
        <h2>useStateA</h2>
        <p>useState: {count}</p>
        <button onClick={sampleEvent}>setState</button>
      </div>
    </div>
  );
};

export default UseStateSample;
