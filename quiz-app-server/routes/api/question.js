const express = require("express");
const router = express.Router();
const { StatusCodes, getReasonPhrase } = require("http-status-codes");

// Load Question model
const Question = require("../../models/question");

// @route GET api/questions
// @description Get all questions
// @access Public
router.get("/", async (_, res) => {
  try {
    const questions = await Question.find();
    res.status(StatusCodes.OK).json(questions);
  } catch (err) {
    const status = StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(status).json({ error: getReasonPhrase(status) });
  }
});

// @route GET api/questions/:id
// @description Get single question by id
// @access Public
router.get("/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);

    if (!question) {
      const status = StatusCodes.NOT_FOUND;
      return res.status(status).json({ error: getReasonPhrase(status) });
    }

    return res.status(StatusCodes.OK).json(question);
  } catch (err) {
    const status = StatusCodes.INTERNAL_SERVER_ERROR;
    return res.status(status).json({ error: getReasonPhrase(status) });
  }
});

// @route POST api/questions
// @description add/save question
// @access Public
router.post("/", async (req, res) => {
  try {
    const question = await Question.create(req.body);
    return res.status(StatusCodes.CREATED).json(question);
  } catch (err) {
    const status = StatusCodes.BAD_REQUEST;
    return res.status(status).json({ error: getReasonPhrase(status) });
  }
});

// @route PUT api/questions/:id
// @description Update question
// @access Public
router.put("/:id", async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(question);
  } catch (err) {
    const status = StatusCodes.BAD_REQUEST;
    return res.status(status).json({ error: getReasonPhrase(status) });
  }
});

// @route DELETE api/questions/:id
// @description Delete question by id
// @access Public
router.delete("/:id", async (req, res) => {
  try {
    return res
      .status(StatusCodes.OK)
      .json({ msg: "Question entry deleted successfully" });
  } catch (err) {
    const status = StatusCodes.BAD_REQUEST;
    return res.status(status).json({ error: getReasonPhrase(status) });
  }
});

module.exports = router;
