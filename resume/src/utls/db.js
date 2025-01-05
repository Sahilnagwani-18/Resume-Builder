import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection established successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Database connection failed.");
  }
};

export default connect;
