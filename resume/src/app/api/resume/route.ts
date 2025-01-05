import { NextResponse } from "next/server";
import connect from "@/utls/db"; // Adjust the path if your `db.js` or `db.ts` is elsewhere
import mongoose from "mongoose";

// Import your Resume model
import Resume from "@/models/Resume"; // Adjust the path as per your project structure

export async function POST(request: Request) {
  try {
    // Connect to the database
    await connect();

    // Parse the incoming JSON data
    const data = await request.json();
    console.log("Received data:", data);

    // Save the data to the database
    const newResume = new Resume(data);
    const savedResume = await newResume.save();

    return NextResponse.json({
      message: "Resume saved successfully!",
      resume: savedResume,
    });
  } catch (error) {
    console.error("Error saving resume:", error);
    return NextResponse.json(
      { error: "Failed to save resume." },
      { status: 500 }
    );
  }
}
