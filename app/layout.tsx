import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
  description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
  openGraph: {
    title: 'Sri Kshetra Pithapuram — Sripada Srivallabha',
    description: 'Official website of Sri Kshetra Pithapuram, the sacred abode of Lord Sripada Srivallabha.',
    url: 'https://your-domain.com', // replace with your actual domain
    siteName: 'Sripada Srivallabha',
    images: [
      {
        url: 'images/og-cover.jpg',   // path relative to /public
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
    images: ['images/og-cover.jpg'],
  },
};