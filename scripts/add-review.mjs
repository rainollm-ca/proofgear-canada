#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const file = path.resolve('src/data/reviews.json');
const reviews = JSON.parse(fs.readFileSync(file, 'utf8'));
const rl = readline.createInterface({ input, output });

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
const ask = async (q, fallback = '') => (await rl.question(`${q}${fallback ? ` [${fallback}]` : ''}: `)).trim() || fallback;

const title = await ask('Title');
const slug = await ask('Slug', slugify(title));
const existingIndex = reviews.findIndex((r) => r.slug === slug);
const existing = existingIndex >= 0 ? reviews[existingIndex] : {};

const review = {
  slug,
  title,
  category: await ask('Category', existing.category || 'Desk setup'),
  summary: await ask('Summary', existing.summary || ''),
  verdict: await ask('Bottom-line verdict', existing.verdict || ''),
  points: [
    await ask('Point 1', existing.points?.[0] || ''),
    await ask('Point 2', existing.points?.[1] || ''),
    await ask('Point 3', existing.points?.[2] || ''),
  ].filter(Boolean),
  score: Number(await ask('Score 0-100', String(existing.score ?? 75))),
  tag: await ask('Tag Buy/Skip/Wait/Check', existing.tag || 'Check'),
  productUrl: await ask('Product/review link', existing.productUrl || ''),
  affiliateUrl: await ask('Affiliate link/tagged Amazon link if available', existing.affiliateUrl || ''),
  updatedAt: new Date().toISOString().slice(0, 10),
};

if (!['Buy', 'Skip', 'Wait', 'Check'].includes(review.tag)) throw new Error('Invalid tag');
if (!Number.isFinite(review.score) || review.score < 0 || review.score > 100) throw new Error('Score must be 0-100');
if (review.points.length < 3) throw new Error('Need 3 points');

if (existingIndex >= 0) reviews[existingIndex] = review;
else reviews.unshift(review);

fs.writeFileSync(file, `${JSON.stringify(reviews, null, 2)}\n`);
rl.close();
console.log(`${existingIndex >= 0 ? 'Updated' : 'Added'} ${slug}`);
