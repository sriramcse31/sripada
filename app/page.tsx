/**
 * Root route — serves the existing index.html from /public.
 * Replace this with a proper Next.js page when you're ready to migrate.
 */
import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the static HTML homepage in /public
  redirect('/index.html');
}
