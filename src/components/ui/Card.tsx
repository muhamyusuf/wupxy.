import Image from 'next/image';
import React, { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="w-full p-2 border-2 border-white rounded-lg">
      <Image
        src={image}
        alt={title}
        width={300}
        height={300}
        className="object-cover w-auto h-auto border-2 border-white aspect-video"
        priority
      />
      <h3 className="heading3">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Card;
