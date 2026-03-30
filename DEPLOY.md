# Self-Hosted Deployment on Cloudflare Workers

This fork adds **Cloudflare Workers** support to [github-readme-stats](https://github.com/anuraghazra/github-readme-stats) by [@anuraghazra](https://github.com/anuraghazra).

## Why this fork?

The original project is an incredible open-source tool used by millions of developers to showcase their GitHub stats. However, the public Vercel instance frequently hits rate limits due to its popularity.

This fork adds a **Cloudflare Workers adapter** so you can self-host your own instance on Cloudflare's edge network with:
- **100,000 free requests/day** (vs Vercel's shared rate limits)
- **Zero cold starts** — always instant response
- **Global edge network** — fast everywhere

All credit goes to **[@anuraghazra](https://github.com/anuraghazra)** and the [contributors](https://github.com/anuraghazra/github-readme-stats/graphs/contributors) for building and maintaining this amazing project.

## Deploy Your Own

```bash
# 1. Fork this repo
# 2. Clone and install
git clone https://github.com/YOUR_USERNAME/github-readme-stats.git
cd github-readme-stats
npm install

# 3. Set your GitHub token
npx wrangler secret put PAT_1
# Paste a GitHub PAT with read:user + repo scopes

# 4. Deploy
npx wrangler deploy
```

Your instance will be live at: `https://github-readme-stats.YOUR_SUBDOMAIN.workers.dev`

## What was changed

| File | Purpose |
|------|---------|
| `worker/cf-worker-entry.js` | CF Workers entry point with routing |
| `worker/vercel-adapter.js` | Bridges Vercel `(req,res)` handlers to CF Workers fetch API |
| `worker/axios-shim.js` | Replaces axios with native `fetch()` for CF Workers compatibility |
| `wrangler.toml` | Cloudflare Workers configuration |
| `src/common/retryer.js` | Made PAT detection lazy (CF Workers env timing) |
| `src/cards/gist.js`, `src/cards/wakatime.js` | Replaced `createRequire` with direct JSON import |

The original Vercel deployment continues to work — no breaking changes.
