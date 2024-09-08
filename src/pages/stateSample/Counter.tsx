import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  AppDispatch,
  increment,
  decrement,
  setValue,
} from "./store";

const Counter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const value = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(10))}>Set Value to 10</button>
    </div>
  );
};

export default Counter;
