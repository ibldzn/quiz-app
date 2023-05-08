import { useEffect, useState } from "react";
import StartPage from "./pages/StartPage";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="main">
      {!username ? (
        <div className="flex items-center justify-center h-full">
          <StartPage setUsername={setUsername} />
        </div>
      ) : (
        <h1>Hello {username}</h1>
      )}
    </div>
  );
}

export default App;
