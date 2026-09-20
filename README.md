# Professional Roofers and Contractors, LLC

A complete, single-page roofing website for Jerry Ortega’s company in Chaparral, New Mexico, serving the El Paso and Las Cruces area. Suggested project/repository name: **professional-roofers-contractors**. No repository has been created, committed, pushed, or deployed.

## Stack

React, Vite, JavaScript/JSX, and plain CSS. Functional components, BEM-style class names, a local unmodified Normalize.css 8.0.1, and optimized local WebP images. No backend, CSS framework, router, or external font dependency.

## Run locally

Install Node.js **24 LTS** and npm. Open a terminal in the extracted project folder containing `package.json`:

```bash
npm install
npm run dev
```

Open the local URL Vite prints. Stop the server with Ctrl+C before running other commands in the same terminal, or use a second terminal.

```bash
npm run lint
npm run build
npm run preview
```

Vite writes the production website to **`dist`**, not `build`. Open `npm run preview`’s URL to inspect that build. Do not double-click `dist/index.html`; JavaScript modules should be served over HTTP. `package-lock.json` is included; GitHub Actions uses `npm ci` for reproducible installs.

## Edit content

- `src/utils/constants.js`: business contact information, navigation, services, all five supplied reviews, gallery items, FAQs, image imports, and map links.
- `src/assets/images/`: all supplied assets converted to WebP, with descriptive filenames; the two business cards are retained as reference assets. No images need to be added manually.
- `src/components/`: one folder per component, one JSX file and matching imported CSS file. `App/App.jsx` assembles the page.
- `src/index.css`: global typography, palette tokens, shared buttons, spacing, focus styles, and reduced-motion support.
- `src/main.jsx`: Normalize.css is imported before global styles and before App/component styles.
- `index.html`: title, description, language, theme color, favicon, and basic Open Graph tags.
- `public/favicon.png`: a small roofline favicon, included in every build.

Services are anchor links to contact. Estimate links go to the contact section or clearly open an email draft; no form pretends to submit. Phone and email links require the visitor’s device to have the relevant calling/email application. The gallery uses a native modal dialog with Escape, previous/next controls, arrow-key navigation, and focus restoration. Reviews are manually advanced, with no invented star scores. FAQs use native `details` elements. The mobile navigation closes with Escape, an outside click, a selected section, or a desktop resize. Mobile call/estimate actions remain at the bottom of the screen.

The Google map loads only after the visitor selects **Load Google Map**. It depicts the general Chaparral area, not a confirmed office location; a separate Google Maps link remains available. Third-party map loading needs internet access and can be blocked by browser privacy settings.

## Information still to supply

1. **Street address:** set `business.streetAddress` in `src/utils/constants.js`. The site currently displays “Street address — to be provided” and “Chaparral, NM.” If adding an office address, also update `mapUrl` and `mapEmbedUrl` to that exact verified location.
2. **Facebook URL:** set `business.facebookUrl`. Until then, the footer displays “Facebook — link to be provided” as plain text, not a fake button.
3. **Final repository name:** this package uses the suggested `professional-roofers-contractors` because the brief left the name blank. A different repository name works with `base: "./"`; update the example URLs in this README accordingly.

The existing website was reviewed for context. The user-supplied contact details and requested address placeholder take precedence over information on that site. No claims about certifications, insurance, awards, years in business, or ratings were added. Reviews reproduce the supplied wording and link to the supplied reviewer profiles; they were not independently reverified.

## GitHub Pages deployment

Expected URL **after you publish** with the suggested name:

https://thegrindnet.github.io/professional-roofers-contractors/

1. Sign in to GitHub and create an empty **public** repository named `professional-roofers-contractors` under `thegrindnet`. Do not initialize it with a README, license, or `.gitignore`; those files already come with the project where applicable.
2. Open the extracted project folder in VS Code. Confirm the pending address/Facebook details with the client.
3. When you are ready to publish, run these commands yourself from that project folder:

```bash
git init
git add .
git commit -m "Create Professional Roofers website"
git branch -M main
git remote add origin https://github.com/thegrindnet/professional-roofers-contractors.git
git push -u origin main
```

4. In the repository, open **Settings → Pages → Build and deployment → Source**, and choose **GitHub Actions**.
5. Open **Actions → Deploy website to GitHub Pages**. If the initial push ran before Pages was enabled, rerun the workflow or choose **Run workflow** on `main`.
6. Wait for both the `build` and `deploy` jobs to succeed, then open the URL shown in the Pages settings or deployment output.

The included `.github/workflows/deploy.yml` runs on pushes to `main` and supports manual runs. It uses Node 24 LTS, executes `npm ci`, lints, builds, uploads `dist`, and deploys with the required Pages permissions. **Do not manually upload `dist` and do not select a `gh-pages` branch source.** `.gitignore` excludes `dist` and `node_modules`; Actions rebuilds the site from source. The included `dist` is only a ready-made local preview build.

`vite.config.js` uses `base: "./"`. Vite rewrites imported images, CSS, JavaScript, and the favicon to work under a repository subdirectory. This is a single page with section anchors, so no router fallback or `.htaccess` is needed.

After a real deployment, inspect the browser’s Network panel: JS must return JavaScript, CSS must return CSS, and images must return image content, not an HTML error page. Local checks passed, but actual GitHub URLs cannot be verified until you publish. The custom domain `professionalrooferssite.com` has not been connected or changed. Once the final public domain is decided, optional canonical and `og:url` tags can be set to that exact URL.

## Image mapping

| Supplied file | Project file / use |
| --- | --- |
| `hero_image.jpg` | `roofing-aerial-hero.webp`, `roofing-aerial-hero-mobile.webp` / hero |
| `Logo.png` | `professional-roofers-logo.webp` / header and footer |
| `image_1.png` | `business-card-front.webp` / retained design reference |
| `image_2.jpg` | `business-card-back.webp` / retained design reference |
| `image_4.jpg` | `roof-membrane-installation.webp` / gallery and about |
| `image_5.jpg` | `commercial-roof-project.webp` / gallery |
| `image_6.jpg` | `crew-lift-exterior.webp` / gallery |
| `image_7.jpg` | `team-project-planning.webp` / gallery |
| `image_8.jpg` | `roof-deck-work.webp` / gallery |
| `image_9.jpg` | `roofing-crew-on-site.webp` / gallery |
| `image_10.jpg` | `roof-underlayment-detail.webp` / gallery |
| `image_11.jpg` | `shingle-project-in-progress.webp` / gallery |
| `image_12.jpg` | `completed-shingle-roof.webp` / gallery |
| `image_13.jpg` | Exact duplicate of `image_4.jpg`; shown once |

Photos are not artificially upscaled or replaced. Small source images remain at their original resolution. Original aspect ratios are preserved; `object-fit: cover` crops tiles, and the photo viewer shows the full image. Website assets total approximately 1.4 MB, including the retained card references.

## Structure

See `PROJECT-TREE.txt` for the complete delivered file tree, including every image and the generated `dist` files. `node_modules` is intentionally not packaged and is recreated with `npm install`.

## Verification and source reference

See `VERIFICATION.md` for completed checks and the preview limitation.

The structural reference’s current `main` branch was inspected on September 18, 2026 at commit `ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e`. Its component folders, imported component styles, central constants, and Vite/React assembly patterns were followed. Business content, branding, old deployment artifacts, and hosting-specific rules were not copied.

Official sources:
- Structural reference: https://github.com/thegrindnet/mesilla_view_builders_website/tree/ef0a8dfb41a90e6ee070099a3ef4e15d3d8ea24e
- Normalize.css source: https://necolas.github.io/normalize.css/8.0.1/normalize.css
- Node.js release status: https://nodejs.org/en/about/previous-releases
- GitHub Pages workflows: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
