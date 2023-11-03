'use client';
import React, { useState } from 'react';

export default function About() {
  const [loading, setLoading] = useState(false);
  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api', {
        headers: {
          Accept: 'application/json',
          method: 'GET',
        },
      });
      if (!response.ok) throw new Error('Could not find anything on /api');
      const data = await response.json();
      console.log(data.users);
    } catch (error: unknown) {
      console.log('Something went wrong: ', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='flex w-full flex-col space-y-2 p-3'>
      <div>
        <p className='text-xl'>About Page</p>
      </div>
      <div className='w-[130px]'>
        <button
          className='w-full cursor-pointer rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-300 hover:text-black hover:transition-colors'
          onClick={() => fetchDataFromApi()}
        >
          {loading ? 'Loading...' : 'Call my API'}
        </button>
      </div>
    </div>
  );
}
