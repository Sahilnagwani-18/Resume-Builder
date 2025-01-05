import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utls/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
  }

  await connect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: "Email is already in use" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = new User({ email, password: hashedPassword });

  try {
    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
  } catch (error) {
   
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
};
