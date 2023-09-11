'use client';

import Link from 'next/link';
import { FC } from 'react';
import { buttonVariants } from './Button';
import { Github } from 'lucide-react';

interface LinkPortoProps {
  link: string | undefined;
  className?: string;
}

const LinkPorto: FC<LinkPortoProps> = ({ link, className }) => {
  return (
    <Link
      href={link || '/portofolio'}
      rel="noopener noreferrer"
      target="_blank"
      className={`flex gap-2 items-center text-black bg-white rounded-md ${buttonVariants(
        {
          variant: 'ghost',
        }
      )} ${className}`}
    >
      <Github className="mt-1" /> <span className="font-bold">Github</span>
    </Link>
  );
};

export default LinkPorto;
