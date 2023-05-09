const Trivia = ({ question }) => {
  return (
    <div className="flex flex-col items-center justify-end h-full">
      {question.image && (
        <img
          src={question.image}
          alt={question.question}
          className="w-1/2 mb-4"
        />
      )}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#100241] to-black p-8 border border-white rounded-xl h-40 w-full">
        <div className="h-full overflow-y-auto">{question.question}</div>
      </div>
      <div className="flex flex-wrap justify-center">
        {question.choices.map((choice) => (
          <button
            key={choice}
            className="w-2/5 p-2 m-2 text-white bg-gradient-to-b from-[#100241] to-black"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
