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

### Adding a publication

Copy an existing `<li class="pub">` block in the Publications section and edit in place.
Keep entries newest-first and keep the `<strong>` around your own name.

### Regenerating images

Source photos live in `Images/`. The web versions were produced with Pillow:
crop to a 4:5 portrait, resize, and export both JPEG and WebP at quality ~85.
If you swap the portrait, regenerate `og.jpg` too so the social card matches.

## Notes

- Light-only by design.
- Reveal animations are gated on a `.js` class, so the page is fully readable with
  JavaScript disabled, and they are disabled under `prefers-reduced-motion`.
- Phone number is deliberately not on the page — email and LinkedIn only.

## DNS (Namecheap → GitHub Pages)

The domain is registered at Namecheap on BasicDNS. In **Domain List → Manage →
Advanced DNS → Host Records**, the records must be exactly:

| Type  | Host | Value                | TTL       |
|-------|------|----------------------|-----------|
| A     | @    | 185.199.108.153      | Automatic |
| A     | @    | 185.199.109.153      | Automatic |
| A     | @    | 185.199.110.153      | Automatic |
| A     | @    | 185.199.111.153      | Automatic |
| CNAME | www  | pusse-01.github.io.  | Automatic |

Delete Namecheap's default parking records first (an A record on `@` pointing at
192.64.119.250, and a CNAME on `www` pointing at parkingpage.namecheap.com).
Also set **Redirect Domain** to "no redirect" if it is set.

Once `dig +short nirodya.com` returns the four 185.199.x.x addresses, turn on
**Enforce HTTPS** in the repository's Settings → Pages (GitHub issues the
Let's Encrypt certificate automatically, usually within an hour).

## Repository layout

`main` serves the live site via GitHub Pages (branch `main`, path `/`).
The previous React portfolio is preserved on `archive/portfolio-2023`
(source) and `archive/gh-pages-2023` (its built output).
