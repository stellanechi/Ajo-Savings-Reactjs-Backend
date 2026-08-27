import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import groupRoutes from "./routes/groupRoutes.js";
import logRoutes from "./routes/logRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/groups", groupRoutes);
app.use("/api/logs", logRoutes);

// Seed Default Trustee
const seedTrustee = async () => {
  try {
    const trusteeExists = await User.findOne({ role: "trustee" });
    if (!trusteeExists) {
      await User.create({
        name: "Default Trustee",
        email: "trustee@ajo.com",
        password: "trustee123", // User model pre-save hook handles hashing
        role: "trustee",
      });
      console.log("Default Trustee created: trustee@ajo.com / trustee123");
    }
  } catch (error) {
    console.error("Error seeding trustee:", error);
  }
};

app.get("/", (req, res) => {
  res.send("Ajo Savings Tracker API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  seedTrustee();
});
