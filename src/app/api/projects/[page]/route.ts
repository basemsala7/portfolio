import connectMongoDB from "../../../../utli/databaseConnection";
import next from "next";
import { NextResponse } from "next/server";
import Projects from "../../../../utli/projectsModel";
export async function GET(
  request: Request,
  { params }: { params: { page: string } }
) {
  try {
    const page = +params.page;
    console.log(page);
    await connectMongoDB();

    const projects = await Projects.find({ page });
    console.log(projects, "projects 12");
    return NextResponse.json({ message: "Done", projects }, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
