// src/app/api/products/add/route.ts

import { NextResponse, NextRequest } from "next/server";
import productModel from "@/models/projectModels";
import { connect } from "@/dbConfig/dbConfig";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const reqBody = await request.json();
    const { name, description, uses, link } = reqBody;

    if (!name || !description || !Array.isArray(uses) || uses.length === 0 || !link) {
      return NextResponse.json(
        { error: "Name, description, uses, and link are required." },
        { status: 400 }
      );
    }

    const existingProject = await productModel.findOne({ name });
    if (existingProject) {
      return NextResponse.json(
        { error: "Project with this name already exists." },
        { status: 400 }
      );
    }

    const newProject = new productModel({
      name,
      description,
      uses,
      link,
    });

    await newProject.save();

    return NextResponse.json(
      { message: "Project added successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    if (error.code === 11000) {
      return NextResponse.json(
        { error: "Duplicate project detected." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "An error occurred during adding the project." },
      { status: 500 }
    );
  }
}
