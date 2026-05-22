import Link from 'next/link';
import { reviews } from '@/data/reviews';
import { Reveal } from '@/components/motion';

export default function ReviewsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-20">
      <p className="mono text-xs uppercase tracking-[0.28em] text-stone-500">Review library</p>
      <h1 className="serif mt-3 text-6xl tracking-[-0.055em] md:text-8xl">Original notes, clear verdicts.</h1>
      <div className="mt-14 grid gap-4">
        {reviews.map((review, index) => (
          <Reveal delay={Math.min(index * 0.03, 0.2)} key={review.slug}>
            <Link href={`/reviews/${review.slug}`} className="grid gap-6 rounded-[2rem] border border-stone-200 bg-white/70 p-6 transition hover:bg-white md:grid-cols-[160px_1fr_110px] md:items-center">
              <div className="mono text-xs uppercase tracking-[0.18em] text-stone-500">{review.category}</div>
              <div><h2 className="serif text-3xl tracking-[-0.04em]">{review.title}</h2><p className="mt-2 text-stone-600">{review.summary}</p></div>
              <div className="rounded-full bg-stone-950 px-4 py-2 text-center text-sm font-bold text-white">{review.tag}</div>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
