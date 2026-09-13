# nirodya.com

Personal site for Nirodya Pussadeniya — PhD researcher, explainable AI and human–machine trust.

Static HTML, CSS and ~60 lines of vanilla JS. No build step, no framework, no dependencies.

```
index.html                  the whole page
styles.css                  design system + layout
main.js                     scroll reveal, nav hairline, scroll-spy (progressive enhancement)
assets/
  portrait.jpg/.webp        hero portrait
  speaking.jpg/.webp        Google I/O Extended keynote
  og.jpg                    1200×630 social preview card
  favicon.svg
Nirodya_Pussadeniya_CV.pdf  linked from the hero and contact sections
robots.txt, sitemap.xml, CNAME
Images/                     original photo sources — gitignored, not deployed
```

## Local preview

```bash
python3 -m http.server 4321
```

Then open http://localhost:4321.

## Deploying

The site is plain static files, so any host works. Publish the repository root
(excluding `Images/`), with no build command.

**Cloudflare Pages / Netlify / Vercel** — connect the repo, leave the build command
empty, set the output directory to `/`, then add `nirodya.com` as a custom domain and
follow the DNS instructions each gives you.

**GitHub Pages** — push to a public repo, then Settings → Pages → deploy from branch
(`main`, `/root`). The `CNAME` file already contains `nirodya.com`; point an `ALIAS`/`A`
record at GitHub's IPs and a `CNAME` for `www` at `<user>.github.io`.

Whichever host you use, make sure HTTPS and the `www` → apex redirect are both on.

## Editing

Content lives directly in `index.html` — sections are commented and in page order.
Design tokens (colours, fonts, spacing) are the custom properties at the top of
`styles.css`; changing `--accent` or `--paper` re-themes the whole page.


