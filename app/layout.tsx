import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
  description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
  openGraph: {
    title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
    description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
    url: 'https://pithapuram.org',
    siteName: 'Sripada Srivallabha',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sri Kshetra Pithapuram',
      },
    ],
    locale: 'te_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
    description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
    images: ['/og-image.jpg'],
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
