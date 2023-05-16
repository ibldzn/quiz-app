const GameOver = ({ earnedPrize }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl">You Earned ${earnedPrize}</h1>
      <button
        className="bg-white text-black px-4 py-2 rounded-md"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOver;
