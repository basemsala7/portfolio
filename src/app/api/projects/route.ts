import connectMongoDB from "../../../utli/databaseConnection";
import next from "next";
import { NextResponse } from "next/server";
import Projects from "../../../utli/projectsModel";
export async function GET(request: Request) {
  try {
    await connectMongoDB();
    const someProjcts = ["My-portfolio", "zeptech", "Note app", "Baby store"];
    const projects = await Projects.find({ title: { $in: someProjcts } });
    return NextResponse.json({ message: "Done", projects }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
