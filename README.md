# Rabia Taskeen — Portfolio

A React (Vite) portfolio built from your resume: Shopify Theme Developer & Frontend Web Developer.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site to `dist/` that you can deploy anywhere (Vercel, Netlify, GitHub Pages, Shopify-hosted static page, etc.).

## Where to edit things

Everything content-related lives in **`src/data.js`** — you never need to touch the component files to update text:

- `profile` — name, titles, summary, email, phone, location, social links, resume file path
- `experience` — your job history and bullet points
- `education` — degree info
- `skills` — grouped skill lists
- `shopifyProjects`, `webProjects`, `storeManagementProjects` — your project cards

### Adding your live website links

Every project in `src/data.js` has a `url: '#'` placeholder, since your resume listed
project/store names but not their URLs. Replace `'#'` with the real link, e.g.:

```js
{ name: 'Shop Braille', client: 'Braille Battery', url: 'https://shopbraille.com' },
```

Any project still set to `'#'` will show a "Link coming soon" label instead of a clickable
button, so nothing ever links to a dead page.

### Adding your resume PDF

Drop your resume PDF into a `public/` folder at the project root and name it `resume.pdf`
(or update `profile.resumeFile` in `src/data.js` to match your filename). The "Resume"
button in the navbar downloads whatever file that path points to.

### Adding social links

Update `profile.socials` in `src/data.js` (GitHub, LinkedIn, Instagram, Upwork, Fiverr).
Any left as `'#'` are automatically hidden from the footer.

## Tech stack

- React 18 + Vite
- Plain CSS (design tokens in `src/index.css`) — no framework lock-in
- [lucide-react](https://lucide.dev/) for icons
