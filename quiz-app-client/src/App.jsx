import { useEffect, useRef, useState } from "react";
import StartPage from "./pages/StartPage";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import GameOver from "./components/GameOver";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(0);
  const [prizes, setPrizes] = useState([]);
  const activeDivPrize = useRef(null);
  const [timeout, setTimeout] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8082/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    setPrizes(
      Array.from(
        { length: questions.length },
        (_, index) => index * 1000 + 1000
      ).reverse()
    );
  }, [questions]);

  useEffect(() => {
    setCurrentPrizeIndex(questions.length - questionNumber - 1);
    if (activeDivPrize.current) {
      setTimeout(() => {
        activeDivPrize.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [questionNumber, questions]);

  if (!username) {
    return (
      <div className="bg-millionaire w-screen h-screen">
        <div className="flex items-center justify-center h-full">
          <StartPage setUsername={setUsername} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-screen h-screen text-white">
      <div className="bg-millionaire bg-cover w-full h-full p-4">
        {timeout ? (
          <GameOver earnedPrize={prizes[questionNumber]} />
        ) : (
          <>
            {questions?.length > 0 && (
              <Trivia
                question={questions[questionNumber]}
                setQuestionNumber={setQuestionNumber}
                setTimeout={setTimeout}
                setPauseTimer={setPauseTimer}
              />
            )}
          </>
        )}
      </div>
      <aside className="w-auto sm:w-1/5 h-full bg-[#020230]">
        <div className="flex flex-col items-center justify-center h-full">
          <Timer
            setTimeout={setTimeout}
            questionNumber={questionNumber}
            pauseTimer={pauseTimer}
          />
          <div className="overflow-y-auto w-full">
            {prizes.map((prize, index) => (
              <div
                key={prize}
                className={`flex items-center justify-center p-2 ${
                  index === currentPrizeIndex ? "bg-teal-600" : ""
                }`}
                ref={index === currentPrizeIndex ? activeDivPrize : null}
              >
                {prize}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
