# Syndicate update

Fixes applied in `update/syndicate` (not pushed).

- Blog listing links use `/blog/{slug}` (no more `/blog/blog/...` 404s)
- Service detail hero falls back to the global inner banner
- Contact pages use a real Contact form
- Privacy Policy page added (`/privacy-policy`)
- Newsletter is POST with CSRF (no email in the query string)
- Blog sidebar recent posts use `/blog/{slug}`; categories/tags filter `/blog?category=` and `/blog?tag=`
- `/our-teams` redirects to `/our-team`
- Footer Our Team goes to `/our-team`; Privacy Policy added
- Team show/popup templates no longer wrap in a broken `{slug}` / invalid partial
- Blog search only runs when `?search=` is present
- Newsletter popup no longer hides the cookie bar or sets a 365-day cookie on failure
- `theme:asset` replaced with `/assets/...` paths
- Homepage leftover Statamic welcome copy removed
- Vite entry stubs added so `npm run build` has source files
- First paint no longer flashes unstyled HTML: inline loader CSS, theme CSS loaded first, preloader hides on page load instead of a 2s delay
- Blog search works on title, excerpt, body, category, and tag; listing page has a search box
- Blog listing now has 36 articles with distinct photos; first page shows 21; search button sits inside the input
- `/blog-grid-three` sidebar search now filters the main article list (not only Recent blogs)
- `/blog-grid-three` Load more appends the next posts on the same page and shows the loader while fetching
- Related post cards on blog single share one height, clamped text, and aligned Read more buttons
- Blog article body now renders (partials no longer swallow the Bard `content` field); new posts have full descriptions
- Portfolio now has 36 projects with distinct photos; listing shows 16 then Load more
