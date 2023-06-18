import React, { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="px-2 py-1 text-black transition duration-200 ease-in-out bg-white border-2 rounded-lg tablet:py-2 tablet:px-4 font-amiko hover:opacity-80"
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;
