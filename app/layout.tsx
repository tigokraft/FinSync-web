// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FinSync',
  description: 'Manage your finances with ease',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Put gradient on the <html> so it shows through under the nav
    <html
      lang="en"
      className={`
        ${inter.className}
        bg-gradient-to-br from-[#0b0d0f] to-[#131d25]
        text-white
        overflow-x-hidden
      `}
    >
      {/* <body> now just holds the content */}
      <body>
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
