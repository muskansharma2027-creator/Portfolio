# SubtleNote Waitlist — Deployment Guide

Standalone high-converting waitlist landing page for **SubtleNote** (Silent, 100% On-Device AI Meeting Notes for Mac).

---

## 🚀 How to Deploy to Vercel

### Method A: Push Your Portfolio Repo (Instant)
The page is already integrated at `/subtlenote`:
```bash
git add .
git commit -m "Launch SubtleNote waitlist page"
git push origin main
```
Your page will be live at:
`https://[your-portfolio-domain].vercel.app/subtlenote`

---

### Method B: Deploy as an Independent Vercel Project
To deploy at the root domain (e.g. `subtlenote.vercel.app`):
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Select your `Portfolio` repository.
3. Under **Root Directory**, choose `subtlenote-waitlist`.
4. Click **Deploy**.
