import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
  description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="te">
      <body>{children}</body>
    </html>
  );
}
