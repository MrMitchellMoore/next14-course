'use client';
import { userStore } from '@/store/user';
import { ChangeEvent } from 'react';

export default function ProductsPage() {
  const user = userStore((state: any) => state.user);
  const updateUser = userStore((state: any) => state.updateUser);
  const sub = userStore.subscribe(() => {
    console.log('hello world');
  });
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='space-y-4'>
        <h1 className='text-center text-xl underline md:text-3xl'>Users</h1>
        <p className='text-xl'>{user.full_name}</p>
        <input
          type='text'
          className='w-full rounded-md border px-2'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            updateUser({
              full_name: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
}
