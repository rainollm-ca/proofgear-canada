import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-[#f7f2ea]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-mono text-sm uppercase tracking-[0.22em] text-stone-950">ProofGear</Link>
        <nav className="flex items-center gap-5 text-sm text-stone-600">
          <Link href="/reviews" className="hover:text-stone-950">Reviews</Link>
          <Link href="/method" className="hover:text-stone-950">Method</Link>
          <Link href="/affiliate-disclosure" className="hover:text-stone-950">Disclosure</Link>
        </nav>
      </div>
    </header>
  );
}
