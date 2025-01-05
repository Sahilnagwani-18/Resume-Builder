import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/lib/db/connect";
import User from "@/models/User";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { email, password } = req.body;

  try {
    // Connect to the database
    await connectDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Create a new user
    const newUser = new User({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
