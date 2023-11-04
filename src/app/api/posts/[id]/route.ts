import { NextResponse } from 'next/server';

type POST = {
  id: number;
  title: string;
  description: string;
};

const post: POST[] = [
  {
    id: 12,
    title: 'Hello',
    description: 'Amazing Post',
  },
  {
    id: 13,
    title: 'Hello World',
    description: 'Amazing Worldly Post',
  },
];

export async function GET(_request: Request, context: any) {
  const { params } = context;
  const posts = post.find((x: any) => params.id === x.id.toString());

  if (!posts) throw new Error("Couldn't find the post");

  return NextResponse.json({
    posts,
  });
}
