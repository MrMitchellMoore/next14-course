import './about.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='h-screen bg-slate-400'>{children}</main>
      </body>
    </html>
  );
}
