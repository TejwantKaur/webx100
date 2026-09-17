import { useState } from "react";
import useInterval from "../hooks/useInterval";

function Timer() {
  // const count = useInterval(1);

  const [count, setCount] = useState(0);
  useInterval(() => setCount((c) => c + 1), 1000);

  return <div> Timer: {count} </div>;
}

export default Timer;
