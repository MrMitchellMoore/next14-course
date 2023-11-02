import Header from '@/components/Header';

export default function Home() {
  const name = 'Mitchell';
  return (
    <main className='p-3 text-lg'>
      <Header name={name} />
      <p>Main page of application!</p>
    </main>
  );
}
