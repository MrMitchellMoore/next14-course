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
    <header className='flex space-x-2'>
      <Logo />
      {links.map((link) => (
        <Menu key={link.href} href={link.href} title={link.title} />
      ))}
      <div>
        Welcome{' '}
        <span className='bg-fuchsia-600 px-3 py-1 tracking-wider text-slate-100'>
          {name}!
        </span>
      </div>
    </header>
  );
}
