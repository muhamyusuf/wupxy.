'use client';

import Link from 'next/link';
import { FC } from 'react';
import { buttonVariants } from './Button';
import { ExternalLink, Github } from 'lucide-react';

interface LinkPortoProps {
  linkGithub?: string;
  linkDemo?: string;
  className?: string;
}

const LinkPorto: FC<LinkPortoProps> = ({ linkGithub, className, linkDemo }) => {
  if (linkGithub && linkDemo) {
    return (
      <div className="flex gap-4">
        <Link
          href={linkGithub || '/portofolio'}
          rel="noopener noreferrer"
          target="_blank"
          className={`flex gap-1 items-center text-black bg-white rounded-md ${buttonVariants(
            {
              variant: 'ghost',
            }
          )} ${className}`}
        >
          <Github className="mt-[0.15rem]" />{' '}
          <span className="font-bold">Github</span>
        </Link>

        <Link
          href={linkDemo || '/portofolio'}
          rel="noopener noreferrer"
          target="_blank"
          className={`flex gap-1 items-center text-black bg-white rounded-md ${buttonVariants(
            {
              variant: 'ghost',
            }
          )} ${className}`}
        >
          <ExternalLink className="mt-[0.05rem]" />{' '}
          <span className="font-bold">Live Demo</span>
        </Link>
      </div>
    );
  }

  if (linkDemo) {
    return (
      <Link
        href={linkDemo}
        rel="noopener noreferrer"
        target="_blank"
        className={`flex gap-1 items-center text-black bg-white rounded-md ${buttonVariants(
          {
            variant: 'ghost',
          }
        )} ${className}`}
      >
        <ExternalLink className="mt-[0.05rem]" />{' '}
        <span className="font-bold">Live Demo</span>
      </Link>
    );
  }

  if (linkGithub) {
    <Link
      href={linkGithub}
      rel="noopener noreferrer"
      target="_blank"
      className={`flex gap-1 items-center text-black bg-white rounded-md ${buttonVariants(
        {
          variant: 'ghost',
        }
      )} ${className}`}
    >
      <Github className="mt-[0.15rem]" />{' '}
      <span className="font-bold">Github</span>
    </Link>;
  }

  return null;
};

export default LinkPorto;
