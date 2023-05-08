const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    mongoose.set("strictQuery", true);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB connected!");
  } catch (err) {
    console.log("Error connecting to MongoDB: ", err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
