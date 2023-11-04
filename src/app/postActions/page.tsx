'use client';
import savePost from '@/actions/savePost';
import { useRef } from 'react';

export default function PostActions() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h1 className='mb-2 text-3xl underline'>Server Actions</h1>
      <form
        action={async (formData) => {
          await savePost(formData);
        }}
        className='grid gap-2 space-y-2'
      >
        <input className='border p-2' name='title' type='text' />
        <textarea className='border p-2' name='description' />
        <button
          className='rounded-md bg-sky-500 px-2 py-2 text-black hover:bg-sky-200'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
