import { useEffect, useState } from "react";

const UseEffectSample = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    console.log("useEffect is called");
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
    console.log("update time");
  }, [time]);

  return (
    <div>
      <h1>UseEffectSample</h1>
      <p>{time}s 経過</p>
    </div>
  );
};

export default UseEffectSample;
