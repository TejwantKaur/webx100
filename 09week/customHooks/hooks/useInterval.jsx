// after every 1 sec count++;

import { useEffect } from "react";

function useInterval(fn, interval) {
  // const [count, setCount] = useState(0);

  useEffect(() => {
    const value = setInterval(() => {
      // setCount(count => count+1)
      fn();
    }, interval);

    return () => {
      clearInterval(value);
    };
  }, [interval]);
}

export default useInterval;
