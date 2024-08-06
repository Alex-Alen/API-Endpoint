import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb+srv://alex:passw0rd123cool@cluster0.uwxvhsl.mongodb.net/dbconnect'

if (!MONGO_URL) {
  console.error("MONGO_URL environment variable is missing");
  process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
    process.exit(1);
  });

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const User = mongoose.model("User", userSchema);

// GET /users endpoint
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
});

// Basic error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});
