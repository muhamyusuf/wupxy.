import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { socialLinks } from '@/datas/index';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact || Wupxy',
};

export default function Contact() {
  return (
    <main>
      <div className="paddingY">
        <h1>Contact</h1>

        <div className="paragraphContainer">
          <p className="description">
            Click this social icons to connect with me &#10084;
          </p>

          <div className="flex items-center justify-start gap-3">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="transition duration-200 ease-in-out opacity-80 hover:opacity-100"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={50}
                  height={50}
                  className="object-cover w-auto h-auto p-1 cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
