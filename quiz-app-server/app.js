const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use("/api/questions", require("./routes/api/question"));

app.get("/", (req, res) => res.send("Hello world!"));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

process.on("exit", async () => {
  console.log("Closing MongoDB connection...");
  await mongoose.connection.close();
});
