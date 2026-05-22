import { notFound } from 'next/navigation';
import { reviews } from '@/data/reviews';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return reviews.map((review) => ({ slug: review.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const review = reviews.find((item) => item.slug === slug);
  return { title: review ? `${review.title} | ProofGear Canada` : 'Review | ProofGear Canada' };
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const review = reviews.find((item) => item.slug === slug);
  if (!review) notFound();
  return (
    <main className="mx-auto max-w-4xl px-5 py-20">
      <div className="mono text-xs uppercase tracking-[0.28em] text-stone-500">{review.category} · Research note · May 22, 2026</div>
      <h1 className="serif mt-5 text-6xl leading-[0.95] tracking-[-0.055em] md:text-8xl">{review.title}</h1>
      <p className="mt-8 text-2xl leading-9 text-stone-700">{review.summary}</p>
      <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-amber-950">
        <strong>Disclosure:</strong> This page is prepared for an affiliate review site. If affiliate links are added later, we may earn a commission at no extra cost to you. This note does not claim hands-on testing unless explicitly stated.
      </div>
      <section className="mt-12 grid gap-8 md:grid-cols-[0.55fr_1fr]">
        <div className="rounded-[2rem] bg-stone-950 p-8 text-white">
          <div className="mono text-xs uppercase tracking-[0.2em] text-stone-400">Verdict</div>
          <div className="serif mt-5 text-5xl tracking-[-0.06em]">{review.tag}</div>
          <div className="mt-6 h-2 rounded-full bg-white/20"><div className="h-2 rounded-full bg-white" style={{ width: `${review.score}%` }} /></div>
        </div>
        <div>
          <h2 className="serif text-4xl tracking-[-0.04em]">What to check</h2>
          <ul className="mt-6 space-y-4 text-lg text-stone-700">
            {review.points.map((point) => <li className="rounded-2xl border border-stone-200 bg-white/60 p-4" key={point}>{point}</li>)}
          </ul>
        </div>
      </section>
      <section className="mt-12 rounded-[2rem] border border-stone-200 bg-white/70 p-8">
        <h2 className="serif text-4xl tracking-[-0.04em]">Bottom line</h2>
        <p className="mt-4 text-xl leading-8 text-stone-700">{review.verdict}</p>
        {(review.affiliateUrl || review.productUrl) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {review.affiliateUrl && <a className="rounded-full bg-stone-950 px-5 py-3 text-sm font-bold text-white" href={review.affiliateUrl} rel="nofollow sponsored noopener noreferrer" target="_blank">Check affiliate link</a>}
            {review.productUrl && <a className="rounded-full border border-stone-300 px-5 py-3 text-sm font-bold text-stone-900" href={review.productUrl} rel="noopener noreferrer" target="_blank">Product source</a>}
          </div>
        )}
      </section>
    </main>
  );
}
