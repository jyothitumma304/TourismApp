const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI from env:", process.env.MONGO_URI); // 👈 Add this
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
