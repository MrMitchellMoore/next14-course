'use client';

import Link from 'next/link';
import Logo from './Logo';
import type { NavLinks } from './Menu';
import Menu from './Menu';

const links: NavLinks[] = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'about',
    href: '/about',
  },
];

export default function Header({ name }: any) {
  return (
    <header className='flex justify-between'>
      <Logo />

      <div className='flex space-x-4'>
        {links.map((link) => (
          <Menu key={link.href} href={link.href} title={link.title} />
        ))}
        <h1 className='ml-1'>Welcome: </h1>
        <Link
          href='/profile'
          className='cursor-pointer rounded-sm bg-fuchsia-600 px-2 py-1 tracking-wider text-slate-100 hover:bg-fuchsia-400'
        >
          <p>{name}!</p>
        </Link>
      </div>
    </header>
  );
}
