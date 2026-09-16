# Syndicate - Statamic Starter Kit

Syndicate is a consulting and multipurpose marketing starter kit for Statamic 5. It is built for agencies and advisory brands that need homes, services, portfolio, team, careers, blog, and contact inquiry forms.

Every marketing page uses one global **Page** template. Add, remove, or reorder Theme sections in the Control Panel. Collection details (blog, services, portfolio, team) keep their own entry templates.

**Live demo:** https://syndicate-statamic.webbydemo.in/  
Control Panel: `/cp` — `admin@example.com` / `password`

## Pages of Syndicate

- **Home Pages**: 3 variants
- **About Us**
- **Blog**: listing (3 variants) plus detail layouts
- **Services**: listing plus detail
- **Our Team**: listing plus member detail
- **Career** (2 variants)
- **FAQ**, **Testimonials**
- **Contact Us** (2 variants)
- **Portfolio**: grid, masonry, and detail
- **Privacy Policy**, **404**

## Theme sections

| Group | Sections |
| --- | --- |
| Homes / heroes | Home and index layout blocks used on the three home variants |
| Content | About, FAQ, testimonials, career, contact, legal |
| Listings | Blog, services, portfolio, team grids and cards |
| Forms | Contact, enquiry, newsletter, and online consult blocks |

Add any section to any page from **CP → Pages → Theme sections**.

## Collections

- **Pages**: Site structure. One Page template plus Theme sections.
- **Blog**: News and advisory articles.
- **Business services**: Service catalog and detail pages.
- **Portfolio**: Project grid, masonry, and detail.
- **Team members**: Staff listing and profiles.
- **Testimonials**: Client quotes.

Site logo, contact, and social links live in **Globals** (Setting, Footer, Header).

## Collections

- **Pages**: Site structure and static content.
- **Blog**: News and advisory articles (3 listing + 3 detail layouts).
- **Business services**: Service catalog and detail pages.
- **Portfolio**: Project grid, masonry, and detail.
- **Team members**: Staff listing and profiles.
- **Testimonials**: Client quotes.
- **Multipurpose sections**: Reusable page-builder content.

## Features of Syndicate

- **Theme sections**: Mix sections onto any marketing page from the Control Panel.
- **Three homes**: Distinct layout variants with collection-driven listings.
- **AJAX forms**: Enquiry, newsletter, contact, and online consult return success and field errors.
- **Responsive layout**: Desktop, laptop, tablet, and mobile.
- **Statamic 5 ready**: Built for Statamic 5.x (`statamic/cms: ^5.0`).

## Control Panel Forms

| Handle | Purpose |
| --- | --- |
| `contact` | Contact inquiry |
| `enquiry` | General enquiry |
| `newsletter` | Newsletter signup |
| `online_consult` | Online consult request |

Statamic Core includes one form. Use **Statamic Pro** if you keep all four.

Set each form’s email recipient in **CP → Forms** after install.

## Installation

Follow the [Starter Kit installation instructions](https://statamic.dev/starter-kits/installing-a-starter-kit) to get started with Syndicate.
Make sure you're running **Statamic 5.x** for compatibility.

Bundled front-end libraries, fonts, and sample imagery are listed in [THIRD_PARTY.md](THIRD_PARTY.md).

### Installing into an existing site

```bash
php please starter-kit:install webbycrown/syndicate-statamic-theme
```

### Installing via the Statamic CLI Tool

If you have the [Statamic CLI Tool](https://github.com/statamic/cli) installed, create a new Statamic installation with Syndicate in one command:

```bash
statamic new my-site webbycrown/syndicate-statamic-theme
```

## Support

Questions and issues: [github.com/webbycrown/syndicate-statamic-theme/issues](https://github.com/webbycrown/syndicate-statamic-theme/issues) or [WebbyCrown](https://www.webbycrown.com/custom-statamic-development-services-company/).

## Changelog

### v1.0.0

- Initial marketplace release
- One global Page template with Theme sections
- Blog, services, portfolio, team, and careers
- AJAX contact, enquiry, newsletter, and online consult forms

---
<div align="center">
  <strong>Made with ❤️ by <a href="https://www.webbycrown.com/custom-statamic-development-services-company/">WebbyCrown Solutions</a></strong>
</div>
