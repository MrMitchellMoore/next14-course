'use client';
import './about.css';
import { Toaster } from 'sonner';
import { AppWrapper } from '@/context';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='h-screen bg-slate-400'>
          <AppWrapper>{children}</AppWrapper>
          <Toaster position='top-right' richColors closeButton />
        </main>
      </body>
    </html>
  );
}
