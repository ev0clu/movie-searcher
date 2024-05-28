import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie Searcher App',
  description: 'App to search and get details of movies'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `flex min-h-screen flex-col gap-3 bg-background antialiased ${inter.className}`
        }
      >
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
