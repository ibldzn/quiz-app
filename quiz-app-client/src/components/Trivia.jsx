const Trivia = ({ question }) => {
  return (
    <div className="flex flex-col items-center justify-end h-full text-xl">
      {question.image && (
        <img
          src={question.image}
          alt={question.question}
          className="w-1/2 mb-4"
        />
      )}
      <div className="flex items-center justify-center bg-gradient-to-b from-[#100241] to-black p-8 border-2 border-white rounded-xl h-40 w-full">
        <div className="h-full overflow-y-auto">{question.question}</div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        {question.choices.map((choice) => (
          <div
            key={choice}
            className="w-2/5 h-12 p-2 m-2 border border-white rounded-xl bg-gradient-to-b from-[#0e0124] to-[#22074d] font-light cursor-pointer text-center hover:bg-blue-500"
          >
            <div className="h-full overflow-y-auto truncate">{choice}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
