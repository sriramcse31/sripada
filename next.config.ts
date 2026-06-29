import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Serve existing static HTML files from /public at their original URLs
  async rewrites() {
    return [
      { source: '/history',            destination: '/history.html' },
      { source: '/sevas',              destination: '/sevas.html' },
      { source: '/slokas',             destination: '/slokas.html' },
      { source: '/gallery',            destination: '/gallery.html' },
      { source: '/schedule',           destination: '/schedule.html' },
      { source: '/contact',            destination: '/contact.html' },
      { source: '/HowToReach',         destination: '/HowToReach.html' },
      { source: '/Donations',          destination: '/Donations.html' },
      { source: '/Annadanam',          destination: '/Annadanam.html' },
      { source: '/GoSeva',             destination: '/GoSeva.html' },
      { source: '/BuildingDevelopment',destination: '/BuildingDevelopment.html' },
      { source: '/books',              destination: '/books.html' },
      { source: '/checkout',           destination: '/checkout.html' },
      { source: '/privacy-policy',     destination: '/privacy-policy.html' },
      { source: '/terms-of-service',   destination: '/terms-of-service.html' },
    ];
  },
};

export default nextConfig;
