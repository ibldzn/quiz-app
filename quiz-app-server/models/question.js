const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  choices: {
    type: Object,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = Question = mongoose.model("question", QuestionSchema);
