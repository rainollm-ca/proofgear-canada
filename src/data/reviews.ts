import rawReviews from './reviews.json';

export type ReviewTag = 'Buy' | 'Skip' | 'Wait' | 'Check';

export type Review = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  verdict: string;
  points: string[];
  score: number;
  tag: ReviewTag;
  productUrl?: string;
  affiliateUrl?: string;
  updatedAt?: string;
};

export const reviews = rawReviews as Review[];
