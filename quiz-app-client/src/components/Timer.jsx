import { useEffect, useState } from "react";

const Timer = ({ setTimeout, questionNumber, pauseTimer }) => {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) {
      return setTimeout(true);
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (pauseTimer) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, setTimeout, pauseTimer]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <div className="flex items-center text-5xl p-12">{timer}</div>;
};

export default Timer;
