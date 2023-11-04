import { NextRequest, NextResponse } from 'next/server';
import data from '@/data/data.json';

export async function GET(_request: NextRequest, context: any) {
  const { params } = context;

  const user = data.filter((x) => params.userId === x.id.toString());

  return NextResponse.json({
    user,
  });
}
