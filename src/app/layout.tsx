import Navbar from '@/components/Navbar';

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
  return (
    <html lang="en">
      <body>
        <div className="relative flex items-center">
          <Navbar />
          <div className="px-4 py-10 tablet:py-30 laptop:py-40 tablet:px-8 ml-0 tablet:ml-[200px] laptop:ml-[320px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
