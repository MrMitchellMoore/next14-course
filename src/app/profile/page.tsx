'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  return (
    <div>
      <div className='p-3'>
        <h1>My Profile Page!</h1>
        <h2>My list of profiles</h2>
      </div>
      <div>
        <ul className='flex flex-col space-y-6 p-3'>
          <li
            className='w-20 cursor-pointer rounded-md bg-green-500 p-2 hover:bg-green-300'
            onClick={() => router.push('/profile/1')}
          >
            Profile 1
          </li>
          <Link
            className='w-20 rounded-md bg-green-500 p-2 hover:bg-green-300'
            href={'/profile/2'}
          >
            Profile 2
          </Link>
          <Link
            className='w-20 rounded-md bg-green-500 p-2 hover:bg-green-300'
            href={{
              pathname: '/profile/3',
              query: {
                userName: 'Mitchell',
              },
            }}
          >
            Profile 3
          </Link>
        </ul>
      </div>
    </div>
  );
}
