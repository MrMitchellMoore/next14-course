import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const posts: any = [
  {
    id: 1,
    title: 'Hello',
    description: 'Amazing post',
  },
];

export async function POST(request: Request) {
  const requestBody = await request.json();

  if (!requestBody.title || !requestBody.description) {
    return NextResponse.error();
  }

  posts.push({
    id: uuidv4(),
    title: requestBody.title,
    description: requestBody.description,
  });

  return NextResponse.json({
    posts,
  });
}
