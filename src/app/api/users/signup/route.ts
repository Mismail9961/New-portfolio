// src/app/api/users/signup/route.ts
import { NextResponse, NextRequest } from "next/server";
import UserModel from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt"

export async function POST(request: NextRequest) {
  try {
    // Ensure MongoDB connection
    await connect();

    // Parse and validate request body
    const reqBody = await request.json();
    const { email, password } = reqBody;

    if ( !email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Check if user already exists (by email or username)
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Create new user (password hashing is handled by userModel.js pre-save hook)
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();

    // Return success response
    return NextResponse.json(
      {
        message: "User created successfully",
        user: { username: savedUser.username, email: savedUser.email },
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle specific MongoDB duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "User with this email or username already exists" },
        { status: 400 }
      );
    }
    // Generic error handling
    return NextResponse.json(
      { error: "An error occurred during signup" },
      { status: 500 }
    );
  }
}
