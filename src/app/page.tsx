'use client';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  const name = 'Mitchell';
  return (
    <main className='h-full w-full'>
      <div className='relative z-[200] bg-slate-300 p-2 text-sm font-normal md:text-lg'>
        <Header name={name} />
        <p>Main page of application!</p>
      </div>
      <div className='w-full'>
        <Image
          src={'/images/manWorking.webp'}
          alt='man working'
          quality={100}
          fill
          priority
          className='object-cover object-top md:object-center'
        />
      </div>
    </main>
  );
}
