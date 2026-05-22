# Updating ProofGear Products / Reviews

Primary data file:

```text
src/data/reviews.json
```

Each review supports:

```json
{
  "slug": "usb-c-hub-checklist",
  "title": "USB-C Hub Checklist",
  "category": "Tech accessories",
  "summary": "Short teaser shown in cards.",
  "verdict": "Bottom-line buyer recommendation.",
  "points": ["Point 1", "Point 2", "Point 3"],
  "score": 78,
  "tag": "Buy | Skip | Wait | Check",
  "productUrl": "https://...",
  "affiliateUrl": "https://...",
  "updatedAt": "YYYY-MM-DD"
}
```

Fastest update flow:

```bash
cd projects/affiliate-review-studio/website
node scripts/add-review.mjs
npm run build
git add . && git commit -m "Add ProofGear review: <product>" && git push
```

Then deploy/copy the static export to Coolify, or let Coolify redeploy when its queue is healthy.

Amazon Associates rules:
- Use only proper Amazon tagged Special Links after/while using Associates.
- Keep disclosure visible: “As an Amazon Associate I earn from qualifying purchases.”
- Do not ask people to use links to support you.
- Do not claim hands-on testing unless it actually happened.
