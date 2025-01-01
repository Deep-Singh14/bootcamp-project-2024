import { NextResponse } from "next/server";
import { getBlogBySlug } from "@/database/db";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = await getBlogBySlug(params.slug);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
