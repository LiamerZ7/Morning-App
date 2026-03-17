import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Morning Brain',
  description: 'Train your brain-state for focus, calm, and better shutdown.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
