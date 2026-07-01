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
    const normalizedText = rawText.toLowerCase();
    const duplicateDetected =
      normalizedText.includes("duplicate") ||
      normalizedText.includes("already registered") ||
      normalizedText.includes("already on the waitlist") ||
      normalizedText.includes("already exists");

    try {
      data = JSON.parse(rawText);
    } catch {
      data = { success: false, message: rawText || "Unexpected response from waitlist service." };
    }

    const message =
      typeof data.message === "string" && data.message.trim()
        ? data.message
        : duplicateDetected
          ? "This email is already on the waitlist! 🎉"
          : "Something went wrong. Please try again.";

    return NextResponse.json({
      success: duplicateDetected ? false : data.success === true,
      duplicate: duplicateDetected || Boolean(data.duplicate),
      message,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
