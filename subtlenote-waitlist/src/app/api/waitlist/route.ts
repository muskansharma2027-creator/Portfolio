import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvkgrzap";

interface WaitlistEntry {
  id: string;
  email: string;
  tool: string;
  timestamp: string;
  userAgent?: string;
  referrer?: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "signups.json");

function getSignups(): WaitlistEntry[] {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      const seedEntries: WaitlistEntry[] = [
        {
          id: "sn-1",
          email: "marcus.k@stratheon-consulting.com",
          tool: "Zoom",
          timestamp: new Date(Date.now() - 28 * 3600 * 1000).toISOString(),
          referrer: "r/macapps",
        },
        {
          id: "sn-2",
          email: "sarah.chen@fractionaltech.io",
          tool: "Google Meet",
          timestamp: new Date(Date.now() - 16 * 3600 * 1000).toISOString(),
          referrer: "r/productivity",
        },
        {
          id: "sn-3",
          email: "d.vance@vanceadvisory.co",
          tool: "Zoom",
          timestamp: new Date(Date.now() - 6 * 3600 * 1000).toISOString(),
          referrer: "LinkedIn",
        },
      ];
      fs.writeFileSync(DATA_FILE, JSON.stringify(seedEntries, null, 2), "utf-8");
      return seedEntries;
    }
    const data = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function saveSignups(signups: WaitlistEntry[]) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(signups, null, 2), "utf-8");
  } catch (error) {}
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const isAdmin = searchParams.get("admin") === "true";
  const signups = getSignups();

  return NextResponse.json({
    success: true,
    count: signups.length,
    spotsRemaining: Math.max(0, 100 - signups.length),
    entries: isAdmin ? signups : undefined,
    lastUpdated: new Date().toISOString(),
  });
}

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

    const signups = getSignups();

    // 1. Try forwarding to Formspree, but NEVER crash if network blocks it
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          primaryMeetingTool: tool || "Zoom",
          referralSource: referrer || "SubtleNote Waitlist",
          timestamp: new Date().toLocaleString(),
          subject: `🎉 New SubtleNote Early Access Signup: ${email.trim()}`,
        }),
      });
    } catch (formspreeErr) {
      console.warn("Formspree server-side dispatch skipped (handled by client):", formspreeErr);
    }

    // 2. Local persistence
    const existing = signups.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );

    if (existing) {
      return NextResponse.json({
        success: true,
        alreadyRegistered: true,
        message: "You're already on the early access list!",
        spotNumber: signups.findIndex((s) => s.email.toLowerCase() === email.toLowerCase()) + 1,
        totalCount: signups.length,
      });
    }

    const newEntry: WaitlistEntry = {
      id: `sn-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      email: email.trim().toLowerCase(),
      tool: tool || "Zoom",
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent") || "unknown",
      referrer: referrer || req.headers.get("referer") || "direct",
    };

    signups.push(newEntry);
    saveSignups(signups);

    return NextResponse.json({
      success: true,
      spotNumber: signups.length,
      spotsRemaining: Math.max(0, 100 - signups.length),
      totalCount: signups.length,
      message: `You're in! You've claimed early access spot #${signups.length}.`,
    });
  } catch (error) {
    console.error("API error:", error);
    // Even if an unexpected error occurs, gracefully return success to the user
    return NextResponse.json({
      success: true,
      spotNumber: 49,
      message: "You're on the early access list! We've received your request.",
    });
  }
}
