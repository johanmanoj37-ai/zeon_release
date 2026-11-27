# `xeops.in` SEO & Multi-Subdomain Authority Plan

> **Context:** Live inspection of `https://xeops.in/` showed a **2-word SSR stub** (`XEOPS`), `<title>XEOPS</title>`, `<meta name="description" content="XEOPS">`, **0 links** to `https://zeon.xeops.in`, and `HTTP 404` on `/robots.txt` and `/sitemap.xml`. Because **XEOPS** will launch multiple products on `*.xeops.in` subdomains (starting with `zeon.xeops.in`), `xeops.in` must operate as the **authoritative root entity hub** that concentrates brand trust and distributes PageRank to every product subdomain.

---

## 1. Why `xeops.in` Matters for Subdomain Rankings

Search engines evaluate subdomains (`zeon.xeops.in`, `<future-app>.xeops.in`) largely independently for link equity and topical relevance unless the root domain (`xeops.in`) actively establishes:

1. **Bidirectional Entity Verification:** Every product subdomain points its `Organization` JSON-LD `@id` to `https://xeops.in/#organization`. In return, `xeops.in` must list and link to every active subdomain so Google confirms all products belong to one real software company.
2. **Internal PageRank Distribution:** External press, LinkedIn, GitHub, and partner backlinks naturally point to `https://xeops.in`. Without a live `/products` hub and direct `<a href="https://<app>.xeops.in">` links on `xeops.in`, that authority dead-ends at the root domain.
3. **App Shell Isolation (`*app.xeops.in`):** Authenticated Flutter/SPA shells like `zeonapp.xeops.in` must be excluded from search indexing so marketing subdomains (`zeon.xeops.in`) never compete with empty 3-word login shells.

---

## 2. Core Site Architecture for `xeops.in`

Build `xeops.in` with server-side rendering (Next.js App Router SSR/SSG) and zero `opacity: 0` above-the-fold SSR blockers:

| Route | Purpose | Target Keywords / Intent |
|---|---|---|
| `/` | **Company Hub & Product Showcase** | `XEOPS`, `XEOPS software`, `XEOPS India`, `B2B operational software` |
| `/products` | **All XEOPS Products Directory** | `XEOPS apps`, `XEOPS products`, central hub linking to every `*.xeops.in` subdomain |
| `/products/zeon` | **ZEON Case Overview & Deep Link Hub** | `ZEON by XEOPS`, `XEOPS warehouse software` → links prominently to `https://zeon.xeops.in`, `/features`, `/product` |
| `/products/<app>` | **Future App Bridge Pages** | One rich 500–800 word overview per future app linking to `<app>.xeops.in` |
| `/about` | **Company Identity, MSME & Founder E-E-A-T** | `XEOPS Kerala`, `Johan P Manoj`, UDYAM `UDYAM-KL-03-0044323`, engineering principles |
| `/contact` | **Sales, Support & Grievance Redressal** | Email (`support@xeops.in`, `support.zeon@xeops.in`), phone (`+91-9447141984`), location |
| `/blog` *(Phase 2)* | **Engineering & Domain Guides** | Guides on Indian B2B distribution, wholesale workflows, product launches |
| `/privacy` & `/terms` | **Company-Wide Legal Policies** | DPDPA 2023 compliance & commercial terms |

---

## 3. Technical & Structured Data Requirements for `xeops.in`

### 3.1 Crawlability & Sitemap
- **`/robots.txt` (currently `404`):** Serve `User-Agent: * Allow: /`, `Disallow: /api/`, and `Sitemap: https://xeops.in/sitemap.xml`. Explicitly allow `Googlebot`, `OAI-SearchBot`, `PerplexityBot`, and `Claude-SearchBot`.
- **`/sitemap.xml` (currently `404`):** Include all canonical `xeops.in` routes with stable `lastModified` ISO dates (never `new Date()` on every request).
- **Canonical & `www` Normalization:** Keep `https://www.xeops.in` → `301` redirect to `https://xeops.in` (or vice versa consistently).
- **HTTP Security Headers:** Match `zeon.xeops.in` with `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `Content-Security-Policy`.

### 3.2 Canonical Entity Graph (`JSON-LD`)
Include a unified `Organization` + `WebSite` + `ItemList` graph on `xeops.in`:

- **`Organization` (`@id: "https://xeops.in/#organization"`):**
  - `name`: `"XEOPS"`
  - `legalName`: `"XEOPS"` *(with MSME UDYAM registration cited in visible `/about` text)*
  - `url`: `"https://xeops.in"`
  - `logo`: `"https://xeops.in/logo.png"`
  - `sameAs`:
    - `"https://www.linkedin.com/company/xeops"`
    - `"https://github.com/XEOPS-in"`
    - *(Add YouTube channel, X/Twitter, Crunchbase, Play Store developer page as created)*
  - `founder`: `{ "@type": "Person", "name": "Johan P Manoj" }`
  - `foundingLocation`: `{ "@type": "Place", "name": "Kerala, India" }`
  - `contactPoint`: `+91-9447141984`, `support.zeon@xeops.in`
- **`ItemList` on `/` and `/products`:**
  - Lists every flagship product (`SoftwareApplication`) with `name` (`"ZEON"`), `url` (`"https://zeon.xeops.in"`), `applicationCategory`, and `author: { "@id": "https://xeops.in/#organization" }`.
  - Keep `@id` `"https://xeops.in/#organization"` identical across `xeops.in` and all subdomains (`zeon.xeops.in` already uses this exact `@id`!).

### 3.3 Internal Linking Rules
- **Homepage `/` & Header Nav:** Link directly to `/products` and showcase **ZEON** above the fold with followed `<a href="https://zeon.xeops.in">` (never `nofollow`, never JS-only `onClick` navigation).
- **Global Footer Ecosystem Bar:** Add a compact `"XEOPS Products"` column in the footer of `xeops.in` **and** every product subdomain (`zeon.xeops.in`, future apps) linking back to `https://xeops.in`, `/products`, and sibling apps.

---

## 4. Search Console, Analytics & Off-Site Authority

1. **Google Search Console (`sc-domain:xeops.in`):**
   - Verify a **DNS TXT Domain Property** (`xeops.in`) rather than individual URL-prefix properties alone. One Domain Property automatically tracks `xeops.in`, `zeon.xeops.in`, `zeonapp.xeops.in`, and every future subdomain.
   - Submit sitemaps for both `https://xeops.in/sitemap.xml` and `https://zeon.xeops.in/sitemap.xml` (and each new app subdomain).
2. **Bing Webmaster Tools + IndexNow:**
   - Verify `xeops.in` and `zeon.xeops.in` in Bing Webmaster Tools (Microsoft Copilot relies on the Bing index) and trigger IndexNow pings on new product/blog publishes.
3. **Unify Brand Signals Across Platforms:**
   - **LinkedIn (`https://www.linkedin.com/company/xeops`):** Set website URL to `https://xeops.in`, list ZEON under Products/Posts with direct links to `https://zeon.xeops.in`, and publish short product demos/updates.
   - **GitHub (`https://github.com/XEOPS-in`):** Pin public repositories/SDKs/docs with `https://xeops.in` in the org profile and `https://zeon.xeops.in` in relevant READMEs/website fields.
   - **YouTube & Software Directories:** Create an official XEOPS YouTube channel (upload product walkthroughs like `Zeondemo.mp4` linking to `zeon.xeops.in` and `xeops.in`), plus listings on Google Play Store (for Android apps), G2, Capterra, Product Hunt, Techjockey, and SoftwareSuggest.

---

## 5. Launch Checklist for Every Future `*.xeops.in` App

Whenever XEOPS launches a new product on `<app>.xeops.in`:

1. **Brand Naming & Disambiguation:** Pair short/coined names with a clear category modifier in `<title>`, `<h1>`, and social handles (e.g., `"<AppName> by XEOPS — <Category>"` instead of a bare 1-word `<h1>`).
2. **Separate Marketing vs. App Shell Subdomains:**
   - `<app>.xeops.in`: Server-rendered Next.js marketing site (`index, follow`, `sitemap.xml`, `robots.txt`).
   - `<app>app.xeops.in` (e.g., `zeonapp.xeops.in`): Authenticated Flutter/SPA client (`<meta name="robots" content="noindex, nofollow">` + `robots.txt` `Disallow: /`).
3. **Link from `xeops.in` on Day 1:**
   - Add the new app card on `https://xeops.in/` and `https://xeops.in/products`.
   - Create `https://xeops.in/products/<app>` linking to `https://<app>.xeops.in`.
   - Add the app to the shared `ItemList` JSON-LD and `xeops.in/sitemap.xml`.
4. **Reuse Shared `@id` Entity Graph:**
   - On `<app>.xeops.in`, reference `"@id": "https://xeops.in/#organization"` as `author`/`publisher` and include XEOPS `sameAs` links.
5. **Pre-Launch Technical Gate:**
   - SSR HTML >= 600–1,000 words on `/`, zero `opacity: 0` on above-the-fold SSR elements, `1200x630` `< 200 KB` OG image, real `<a href>` footer links (no button-only legal modals), `301` redirects for alternate URLs, security headers, and `tel:` in E.164 (`+91...`).
6. **Post-Launch Indexing Gate:**
   - Submit `https://<app>.xeops.in/sitemap.xml` in GSC (`sc-domain:xeops.in`) and Bing Webmaster Tools, and publish initial YouTube/LinkedIn/directory announcements within the first week.
