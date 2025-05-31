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
    const { name,description,image,link } = reqBody;

    if ( !name || !description || !image || !link) {
      return NextResponse.json(
        { error: "Name , Description and Image are required" },
        { status: 400 }
      );
    }

    // Check if user already exists (by email or username)
    const existingProject = await UserModel.findOne({ name });
    if (existingProject) {
      return NextResponse.json(
        { error: "Project With This Name already exist" },
        { status: 400 }
      );
    }


    const newProject = new UserModel({
      name,
      description,
      image,
      link
    });
    const savedProject = await newProject.save();

    // Return success response
    return NextResponse.json(
      {
        message: "Project added successfully",
      },
      { status: 201 }
    );
  } catch (error: any) {
    // Handle specific MongoDB duplicate key error
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Project with this name already exists" },
        { status: 400 }
      );
    }
    // Generic error handling
    return NextResponse.json(
      { error: "An error occurred during Adding Project" },
      { status: 500 }
    );
  }
}
