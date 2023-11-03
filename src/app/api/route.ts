import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    users: [
      {
        name: 'Mitchell',
        age: 36,
        id: 1,
      },
      {
        name: 'Guillaume',
        age: 35,
        id: 2,
      },
    ],
  });
}

export async function POST(res: NextRequest) {
  const data: unknown = await res.json();

  return NextResponse.json({ data }, { status: 200 });
}
