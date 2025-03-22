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
      <body>{children}</body>
    </html>
  );
}
