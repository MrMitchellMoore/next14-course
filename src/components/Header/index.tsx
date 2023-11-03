'use client';

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
        <span className='rounded-sm bg-fuchsia-600 px-2 py-1 tracking-wider text-slate-100'>
          <p>{name}!</p>
        </span>
      </div>
    </header>
  );
}
