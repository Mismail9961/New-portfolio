// src/app/api/users/showproject/route.ts
import { NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import projectModel from "@/models/projectModels";

export async function GET() {
  try {
    await connect();
    const projects = await projectModel.find({});
    return NextResponse.json({ success: true, projects });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, message: "Unknown error occurred" }, { status: 500 });
  }
}
