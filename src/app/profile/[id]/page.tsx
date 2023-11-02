'use client';
import { useParams, useRouter } from 'next/navigation';

export default function ProfileID() {
  const params = useParams();
  const router = useRouter();

  return (
    <div className='flex flex-col p-3'>
      <h1> My Profile Page id: {params.id}</h1>
      <button
        className='w-[150px] cursor-pointer rounded-md bg-yellow-300 p-1 font-bold text-black hover:bg-yellow-200'
        onClick={() => router.back()}
      >
        Back to main page
      </button>
    </div>
  );
}
