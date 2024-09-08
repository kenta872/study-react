import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffectSample = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("first useEffect is called");
    let intervalId = null;
    intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
      console.log("end");
    };
  }, []);

  useEffect(() => {
    console.log("second useEffect is called");
    window.localStorage.setItem("time-key", time.toString());
  });

  useLayoutEffect(() => {
    console.log("first layoutEffect is called");
    const _timeStr = window.localStorage.getItem("time-key");
    if (!_timeStr) {
      return;
    }
    const _time: number | null = parseInt(_timeStr);
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  return (
    <div>
      <h1>UseLayoutEffectSample</h1>
      <p>{time}s 経過</p>
    </div>
  );
};

export default UseLayoutEffectSample;
