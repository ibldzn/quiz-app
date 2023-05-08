import { useEffect, useState } from "react";

const useTimer = (timeoutSec, onTimeout = () => {}) => {
  const [time, setTime] = useState(timeoutSec);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    if (time <= 0) {
      onTimeout();
      return clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [time]);

  return time;
};

export default useTimer;
