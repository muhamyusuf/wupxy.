'use client';

import { Navlinks } from '@/datas';
import { FC } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  let pathName = usePathname();
  if (pathName.includes('/blog/')) {
    pathName = '/blog';
  }

  const activePath = 'text-white';
  const inactivePath =
    'text-gray hover:text-white opacity-80 hover:opacity-100 transition duration-100 ease-in-out rounded-lg hover:text-white';

  return (
    <nav className="fixed h-[8%] tablet:h-full bottom-0 w-full laptop:max-w-[320px] tablet:max-w-[200px] flex tablet:justify-end justify-center items-center pt-0 tablet:pt-[100px] laptop:pt-[200px] tablet:items-start font-amiko px-2 tablet:px-4 rounded-lg backdrop-blur-sm tablet:backdrop-blur-none">
      <div className="flex flex-row gap-5 text-sm tablet:flex-col tablet:text-xl">
        <Link
          href="/"
          className="font-extrabold rounded-lg tablet:mb-10 textGradient font-poppin"
        >
          <p>Wupxy.</p>
        </Link>

        {Navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={pathName === link.href ? activePath : inactivePath}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
