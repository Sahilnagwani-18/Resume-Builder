import { NextResponse } from "next/server";
import connect from "@/utls/db"; 
import mongoose from "mongoose";

// Import your Resume model
import Resume from "@/models/Resume"; 
export async function POST(request: Request) {
  try {
  
    await connect();

    const data = await request.json();
    console.log("Received data:", data);

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
