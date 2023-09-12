import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from '@/components/ui/Button';
import { ExternalLink } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  isCurrent?: string;
}

const Card: FC<CardProps> = ({
  title,
  description,
  image,
  link,
  isCurrent,
}) => {
  const isCurrentValid = isCurrent?.replace(/\s/g, '-');

  return (
    <Link
      href={`portofolio/${isCurrentValid}`}
      className="transition duration-300 hover:opacity-80 group"
    >
      <div className="w-full border rounded-lg shadow-lg border-gray/10">
        <div className="p-2">
          <Image
            src={image}
            alt={title}
            width={858}
            height={572}
            className="object-cover w-full h-[200px] border-2 rounded-md aspect-full"
            priority
          />

          <h3 className="mt-5">{title}</h3>

          <div className="flex flex-col gap-3 justify-between mt-5 min-h-[150px] tablet:gap-5">
            <p className="description">{description}</p>

            <div className="flex gap-2">
              <Link href={`portofolio/${isCurrentValid}`}>
                <Button>See Projects</Button>
              </Link>

              <Link href={link} rel="noopener noreferrer" target="_blank">
                <Button>
                  <ExternalLink />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
