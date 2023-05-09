const Trivia = ({ question }) => {
  return (
    <div className="flex flex-col items-center justify-around h-1/2">
      <div className="bg-gradient-to-b from-[#100241] to-black p-8 border border-white rounded-xl">
        {question.question}
      </div>
      <div className="flex flex-wrap justify-center">
        {question.choices.map((choice) => (
          <button
            key={choice}
            className="w-1/2 p-2 my-2 text-white bg-gradient-to-b from-[#100241] to-black"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
