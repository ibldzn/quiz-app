import { useRef, useEffect } from "react";
import useSound from "use-sound";

const StartPage = ({ setUsername }) => {
  const [playBGM, { stop }] = useSound("/bgm.mp3", { loop: true });

  useEffect(() => {
    playBGM();
    return () => stop();
  }, [playBGM]);

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
