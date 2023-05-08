import { useRef, useEffect } from "react";

const StartPage = ({ setUsername }) => {
  const bgm = new Audio("/bgm.mp3");

  useEffect(() => {
    bgm.loop = true;
    bgm.load();
    bgm.play();

    return () => {
      bgm.pause();
    };
  }, []);

  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value) {
      setUsername(inputRef.current.value);
    }
  };

  return (
    <div className="flex flex-col items-center w-fit justify-center text-black">
      <input
        ref={inputRef}
        className="border-2 border-gray-300 p-2 rounded-lg"
        type="text"
        placeholder="Masukkan nama anda"
      />
      <button
        onClick={handleClick}
        className="border-2 border-blue-800 w-full p-2 rounded-lg mt-2 text-white"
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
