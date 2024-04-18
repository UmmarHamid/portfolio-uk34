import ThemeSwitch from '@/components/panel/ThemeSwitch';
import Sidebar from '@/components/sidebar/sidebar';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/blue.css';
import '../styles/style.css';
import '../styles/theme.css';
import './globals.css';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'urFolio - Portfolio web',
  description: 'urFolio - a Open Source portfolio web application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <ThemeSwitch />
          <Sidebar />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
