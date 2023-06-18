import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import Button from './Button';

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
        className="object-cover w-auto h-auto border-2 rounded-lg aspect-full"
        priority
      />
      <h3 className="mt-5 heading3">{title}</h3>

      <div className="flex flex-col gap-3 mt-5 tablet:gap-5">
        <p className="description">{description}</p>
        <Link href={link} rel="noopener noreferrer" target="_blank">
          <Button text="See Project" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
