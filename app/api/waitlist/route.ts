import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const normalizedEmail = (email ?? "").toString().trim().toLowerCase();

    if (!normalizedEmail) {
      return NextResponse.json(
        { success: false, message: "Email is required." },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzmkVZZtd92PQOn4BQvJXHdne3oGOactsiLHfvUfbuu_EiCInbyw-OH0EzeGrzX1qMq/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmail }),
      }
    );

    const rawText = await response.text();
    let data: Record<string, unknown> = {};

    try {
      data = JSON.parse(rawText);
    } catch {
      data = { success: false, message: rawText || "Unexpected response from waitlist service." };
    }

    return NextResponse.json({
      success: data.success === true,
      duplicate: Boolean(data.duplicate),
      message:
        typeof data.message === "string"
          ? data.message
          : "Something went wrong. Please try again.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
