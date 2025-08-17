import { NextResponse } from 'next/server';

export async function GET() {
  const hasKey = Boolean(process.env.GEMINI_API_KEY);
  return hasKey
    ? NextResponse.json({ ok: true })
    : NextResponse.json({ ok: false, error: 'Missing GEMINI_API_KEY' }, { status: 500 });
}