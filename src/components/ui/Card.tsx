import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from '@/components/ui/Button';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="w-full p-2 border-2 border-white rounded-lg">
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
          <Link href={link} rel="noopener noreferrer" target="_blank">
            <Button>See Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
