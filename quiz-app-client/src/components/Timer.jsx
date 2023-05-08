import useTimer from "../hooks/useTimer";

const Timer = ({ timeoutSec, onTimeout = () => {} }) => {
  const time = useTimer(timeoutSec, onTimeout);

  return (
    <div className="flex items-center justify-center text-5xl p-12">{time}</div>
  );
};

export default Timer;
