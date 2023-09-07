import './globals.css';
import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import Logo from '../assets/shared/logo.svg';
import Link from 'next/link';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        <main className="min-h-screen p-10 bg-gray-100">
          <div className="flex flex-col items-center bg-header-pattern">
            <div className="flex justify-center md:justify-start w-full md:max-w-5xl xl:max-w-7xl">
              <Link href="/">
                <Logo className="mb-20" aria-label="logo" />
              </Link>
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
