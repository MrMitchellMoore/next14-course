'use client';
import { useParams } from 'next/navigation';

export default function PostID() {
  const params = useParams();
  console.log(params.postId);
  return <div>My Profile&apos;s PostID Page!</div>;
}
