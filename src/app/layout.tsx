import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

import './globals.css';

export const metadata = {
  title: { default: 'Wupxy', template: '%s | Wupxy' },
  description: 'Wupxy || Muhammad Yusuf Porfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <div className="container relative flex items-center">
          <Navbar />
          <motion.div
            key={pathName}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            variants={{
              initialState: {
                opacity: 0,
                transform: 'translateY(5%)',
              },
              animateState: {
                opacity: 1,
                transform: 'translateY(0%)',
              },
              exitState: {
                opacity: 0,
              },
            }}
            className="px-4 py-10 tablet:py-30 laptop:py-40 tablet:px-8 ml-0 tablet:ml-[200px] laptop:ml-[320px]"
          >
            {children}
          </motion.div>
        </div>
      </body>
    </html>
  );
}
