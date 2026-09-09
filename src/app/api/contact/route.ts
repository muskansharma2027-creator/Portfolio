import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, topic } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // In a real production deployment, this would trigger an email via Resend / SendGrid / Telegram Bot
    console.log("[Portfolio Inquiry Received]:", {
      name,
      email,
      topic,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry successfully recorded." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to process contact inquiry:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
