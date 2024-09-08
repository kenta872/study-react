import SampleContext from "./SampleContext";
import UseReduceSample from "./UseReducerSample";
import UseStateSample from "./UseStateSample";
import { useState, useReducer } from "react";
import { MyContextProvider } from "./MyContext";
import { store } from "./store";
import Counter from "./Counter";
import { Provider } from "react-redux";

const StateSample = () => {
  // useStateの準備
  const [state, setState] = useState<number>(0);

  // useReducerの準備
  type ActionType = { arg1: string; arg2: number };
  const reducer = (prev: number, action: ActionType): number => {
    switch (action.arg1) {
      case "pt1":
        return prev + action.arg2;
      case "pt2":
        return prev * action.arg2;
      default:
        throw new Error("error!");
    }
  };
  const [reduceState, dispatch] = useReducer(reducer, 0);

  // useContextの準備
  return (
    <>
      <MyContextProvider>
        <div>
          <UseStateSample count={state} setCount={setState} />
          <UseReduceSample reduceState={reduceState} dispatch={dispatch} />
          <SampleContext />
        </div>
      </MyContextProvider>
      <Provider store={store}>
        <Counter />
      </Provider>
    </>
  );
};

export default StateSample;
