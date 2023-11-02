import Link from 'next/link';

export type NavLinks = {
  title: string;
  href: string;
};

export default function Menu({ title, href }: NavLinks) {
  return (
    <div>
      <div>
        <ul className='flex space-x-2'>
          <Link href={href}>{title}</Link>
        </ul>
      </div>
    </div>
  );
}
