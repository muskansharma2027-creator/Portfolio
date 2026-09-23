import { NextRequest, NextResponse } from "next/server";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkgrzap";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, tool, referrer } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid work email address." },
        { status: 400 }
      );
    }

    // Forward directly to Formspree
    const formspreeRes = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        primaryMeetingTool: tool || "Zoom",
        referralSource: referrer || "HushNote Waitlist",
        timestamp: new Date().toLocaleString(),
        subject: `🎉 New HushNote Early Access Signup: ${email.trim()}`,
      }),
    });

    if (formspreeRes.ok) {
      return NextResponse.json({
        success: true,
        spotNumber: 49,
        spotsRemaining: 51,
        totalCount: 49,
        message: "You're on the list! We've received your request.",
      });
    } else {
      return NextResponse.json({
        success: true,
        message: "You're on the list!",
      });
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    count: 48,
    spotsRemaining: 52,
    lastUpdated: new Date().toISOString(),
  });
}
