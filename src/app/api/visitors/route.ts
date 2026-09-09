import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'visitors.json');

function getCount(): number {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      return typeof data.count === 'number' ? data.count : 1284;
    }
  } catch (err) {
    console.error('Error reading visitors file:', err);
  }
  return 1284;
}

function saveCount(count: number): void {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count }, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving visitors file:', err);
  }
}

export async function GET(request: NextRequest) {
  let count = getCount();
  const sessionCookie = request.cookies.get('visitor_session');

  if (!sessionCookie) {
    count += 1;
    saveCount(count);

    const response = NextResponse.json({ count, isNew: true });
    response.cookies.set('visitor_session', '1', {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
    });
    return response;
  }

  return NextResponse.json({ count, isNew: false });
}
