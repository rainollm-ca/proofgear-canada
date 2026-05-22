import Link from 'next/link';
import { ArrowRight, CheckCircle2, MousePointer2, Sparkles } from 'lucide-react';
import { FloatCard, Reveal } from '@/components/motion';
import { reviews } from '@/data/reviews';

export default function HomePage() {
  const featured = reviews.slice(0, 6);
  return (
    <main>
      <section className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="mono mb-5 text-xs uppercase tracking-[0.28em] text-stone-500">Canada-first desk gear reviews</p>
          <h1 className="serif max-w-4xl text-6xl leading-[0.92] tracking-[-0.055em] text-stone-950 md:text-8xl">
            Buy less junk for your workday.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-stone-650 text-stone-700">
            Proof-led product notes for physicians, engineers, founders, and remote operators: CAD-aware, caveat-first, and built around what to buy, skip, or wait on.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/reviews" className="group inline-flex items-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-stone-950/10">
              View review notes <ArrowRight className="ml-2 size-4 transition group-hover:translate-x-1" />
            </Link>
            <Link href="/method" className="inline-flex items-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900">
              Review method
            </Link>
          </div>
        </Reveal>
        <div className="relative min-h-[560px]">
          <div className="absolute inset-0 rounded-[3rem] border border-stone-300 bg-white/45 shadow-2xl shadow-stone-900/10 backdrop-blur" />
          <FloatCard className="absolute left-4 top-8 w-[78%] rounded-[2rem] border border-stone-200 bg-[#fffaf1] p-6 shadow-2xl">
            <p className="mono text-xs uppercase tracking-[0.22em] text-stone-500">Today’s verdict</p>
            <h2 className="serif mt-4 text-4xl leading-none tracking-[-0.04em]">Cable tray: buy if your desk is fixed.</h2>
            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
              <span className="rounded-full bg-emerald-100 px-3 py-2 text-emerald-900">Useful</span>
              <span className="rounded-full bg-amber-100 px-3 py-2 text-amber-900">Has caveats</span>
              <span className="rounded-full bg-stone-200 px-3 py-2 text-stone-800">CAD-aware</span>
            </div>
          </FloatCard>
          <FloatCard className="absolute bottom-20 right-2 w-[70%] rounded-[2rem] border border-stone-200 bg-stone-950 p-6 text-white shadow-2xl" >
            <p className="mono text-xs uppercase tracking-[0.22em] text-stone-400">Trust rule</p>
            <p className="serif mt-4 text-3xl leading-tight tracking-[-0.03em]">Every recommendation gets a drawback.</p>
          </FloatCard>
          <div className="absolute bottom-6 left-8 flex items-center gap-3 rounded-full border border-stone-200 bg-white px-4 py-3 text-sm shadow-xl">
            <MousePointer2 className="size-4" /> Scroll for the proof system
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-white/50 py-16">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-3">
          {[
            ['No fake testing', 'We label research-only vs hands-on clearly.'],
            ['Buy / Skip / Wait', 'A verdict format designed to build trust, not pressure.'],
            ['Affiliate clean', 'Disclosure is visible before the recommendation.'],
          ].map(([title, text], index) => (
            <Reveal delay={index * 0.08} key={title}>
              <div className="rounded-[2rem] border border-stone-200 bg-[#fbf7ef] p-7">
                <CheckCircle2 className="mb-6 size-6 text-stone-950" />
                <h3 className="serif text-3xl tracking-[-0.04em]">{title}</h3>
                <p className="mt-3 text-stone-600">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-stone-500">Launch library</p>
              <h2 className="serif mt-3 text-5xl tracking-[-0.05em] md:text-7xl">10 recent original review notes.</h2>
            </div>
            <Sparkles className="hidden size-10 text-amber-700 md:block" />
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((review, index) => (
            <Reveal delay={index * 0.04} key={review.slug}>
              <Link href={`/reviews/${review.slug}`} className="group block h-full rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-stone-900/10">
                <div className="flex items-center justify-between">
                  <span className="mono text-xs uppercase tracking-[0.18em] text-stone-500">{review.category}</span>
                  <span className="rounded-full bg-stone-950 px-3 py-1 text-xs font-bold text-white">{review.tag}</span>
                </div>
                <h3 className="serif mt-8 text-3xl leading-none tracking-[-0.04em]">{review.title}</h3>
                <p className="mt-4 text-stone-600">{review.summary}</p>
                <div className="mt-8 h-2 rounded-full bg-stone-100"><div className="h-2 rounded-full bg-stone-950" style={{ width: `${review.score}%` }} /></div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
