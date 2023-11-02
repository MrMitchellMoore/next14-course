import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next 14',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen w-full bg-slate-400'>{children}</body>
    </html>
  );
}
