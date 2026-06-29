import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://pithapuram.org'),
  title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
  description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
  openGraph: {
    title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
    description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
    url: 'https://sripadasrivallabha.org',
    siteName: 'Sripada Srivallabha',
    images: [
      {
        url: 'https://sripadasrivallabha.org/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Sripada Srivallabha Mahasamsthanam, Pithapuram — sacred abode of Lord Sripada Srivallabha',
      },
    ],
    locale: 'te_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
    description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
    images: ['images/og-cover.jpg'],
  },
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
