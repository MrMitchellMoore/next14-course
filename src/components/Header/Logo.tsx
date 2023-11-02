import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className='flex items-center justify-center'>
      <Link href={'/'}>
        <Image src={'/vercel.svg'} width={100} height={60} alt='Logo' />
      </Link>
    </div>
  );
}
