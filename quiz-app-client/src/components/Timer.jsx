import { useEffect, useState } from "react";
import useSound from "use-sound";

const Timer = ({ setTimeout, questionNumber, pauseTimer }) => {
  const [timer, setTimer] = useState(30);
  const [playTimeoutSound, { stop: stopTimeoutSound }] =
    useSound("/times-up.mp3");

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
    if (timer === 0) {
      playTimeoutSound();
    }
    return () => stopTimeoutSound();
  }, [timer, playTimeoutSound, stopTimeoutSound]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);

  return <div className="flex items-center text-5xl p-12">{timer}</div>;
};

export default Timer;
