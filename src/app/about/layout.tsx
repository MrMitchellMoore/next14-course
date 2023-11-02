export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='h-screen w-full bg-black text-white'>{children}</body>
    </html>
  );
}
