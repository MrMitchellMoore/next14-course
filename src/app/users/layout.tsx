import '@/app/globals.css';

import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['100', '300', '500'], subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Next 14 Products',
  description: 'Generated by create next app',
  icons: './vercel.svg',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`h-screen w-full bg-slate-400 ${roboto.className}`}>
        {children}
      </body>
    </html>
  );
}