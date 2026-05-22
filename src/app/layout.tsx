import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { ProgressBar } from '@/components/motion';

export const metadata: Metadata = {
  title: 'ProofGear Canada — Desk Gear Reviews Without Hype',
  description: 'Canada-first proof-led reviews of desk, tech, and productivity gear for people who work long hours.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <SiteHeader />
        {children}
        <footer className="mx-auto max-w-7xl px-5 py-12 text-sm text-stone-500">
          <div className="border-t border-stone-200 pt-8">
            ProofGear Canada is an independent review project. Affiliate links may earn commission. No fake hands-on testing.
          </div>
        </footer>
      </body>
    </html>
  );
}
