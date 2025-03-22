import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EX PEN',
  description: 'みんなの生活費を共有するSNSです！',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white">
        <header className="bg-amber-500 py-1 px-4">
          <h1 className="text-amber-50 text-2xl font-bold">EX PEN</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
