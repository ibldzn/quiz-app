import useSound from "use-sound";
import "./Trivia.css";
import { useEffect, useRef, useState } from "react";

const delay = (ms, fn) => setTimeout(fn, ms);

const Trivia = ({ question, setQuestionNumber, setTimeout, setPauseTimer }) => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [className, setClassName] = useState("choice");
  const [playOpening] = useSound("/play.mp3");
  const [playCorrect] = useSound("/correct.mp3");
  const [playWrong] = useSound("/wrong.mp3");

  useEffect(() => {
    playOpening();
  }, [playOpening]);

  const handleClicked = (choice) => {
    setPauseTimer(true);

    const isCorrect = choice === question.choices[question.answer];

    setSelectedChoice(choice);
    setClassName("choice active");

    delay(3000, () =>
      setClassName(`choice ${isCorrect ? "correct" : "wrong"}`)
    );

    delay(5000, () => {
      if (isCorrect) {
        playCorrect();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedChoice(null);
          setPauseTimer(false);
        });
      } else {
        playWrong();
        delay(1000, () => {
          setTimeout(true);
        });
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-end h-full text-xl">
      {question.image && (
        <div className="w-64 h-64">
          <img
            src={question.image}
            alt="Image"
            className="w-full h-full object-contain mb-4"
          />
        </div>
      )}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#100241] to-black p-8 border-2 border-white rounded-xl h-40 w-full">
        <div className="h-full overflow-y-auto">{question.question}</div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {question.choices.map((choice) => (
          <div
            key={choice}
            onClick={() => !selectedChoice && handleClicked(choice)}
            className={selectedChoice === choice ? className : "choice"}
          >
            <div className="h-full w-full overflow-y-auto">{choice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
