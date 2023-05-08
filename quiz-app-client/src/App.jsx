import { useEffect, useState } from "react";
import StartPage from "./pages/StartPage";

function App() {
  const [username, setUsername] = useState("");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(console.error);
  }, []);

  if (!username) {
    return (
      <div className="main">
        <div className="flex items-center justify-center h-full">
          <StartPage setUsername={setUsername} />
        </div>
      </div>
    );
  }

  return (
    <div className="main">
      {questions?.length > 0 && <p>{questions[0].question}</p>}
    </div>
  );
}

export default App;
