import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Consultation request:", body);
    return NextResponse.json({
      success: true,
      message: "Consultation request received. We'll be in touch within 24 hours.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
