import './globals.css';
import Navbar from '@/components/Navbar';
import { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: { default: 'Wupxy', template: '%s | Wupxy' },
  description: 'Wupxy || Muhammad Yusuf Porfolio',
};

export default function RootLayout({
  children,
  pageProps,
}: {
  pageProps: AppProps;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container relative flex items-center" {...pageProps}>
          <Navbar />

          <div className="px-4 py-10 tablet:py-30 laptop:py-40 tablet:px-8 ml-0 tablet:ml-[200px] laptop:ml-[320px]">
            {children}
          </div>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
