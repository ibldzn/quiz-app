import { useEffect, useState } from "react";
import StartPage from "./pages/StartPage";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentPrizeIndex, setCurrentPrizeIndex] = useState(4);

  useEffect(() => {
    fetch("http://localhost:8082/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(console.error);
  }, []);

  if (!username) {
    return (
      <div className="bg-millionaire w-screen h-screen">
        <div className="flex items-center justify-center h-full">
          <StartPage setUsername={setUsername} />
        </div>
      </div>
    );
  }

  const prizes = [
    100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000,
  ].reverse();

  return (
    <div className="flex w-screen h-screen">
      <div className="bg-millionaire bg-cover text-white w-full h-full p-4">
        {questions?.length > 0 && <Trivia question={questions[4]} />}
      </div>
      <aside className="w-1/5 bg-red-500 h-full">
        <div className="flex flex-col items-center justify-center">
          <Timer timeoutSec={5} onTimeout={() => console.log("Time out")} />
          {prizes.map((prize, index) => (
            <div
              key={prize}
              className={`flex items-center justify-center w-full p-2 ${
                index === currentPrizeIndex && "bg-green-500"
              }`}
            >
              {prize}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default App;
