# Charlie Niu — Portfolio

Source code for my personal site, live at
**[sg-fit.github.io](https://sg-fit.github.io/)**.

I'm a junior at Friends' Central School in Philadelphia, originally from Wuhan.
This site is where I keep track of what I'm building — mostly work at the
intersection of **computer science and cybersecurity**, with some music and
photography alongside it.

The project I care most about right now: a detection algorithm, deployable on
any website, that distinguishes AI agent traffic from human traffic using
behavioral fingerprinting and cognitive-latency signals. That research is
ongoing through the ESAP program at UPenn.

## What's here

| Page | What you'll find |
|---|---|
| **Home** | Short introduction and featured work |
| **About** | Background, academics, and the things I do outside of code |
| **Projects** | Write-ups of what I've built — what it does, what broke, what I learned |
| **Blog** | Notes on whatever I'm currently working through |
| **Contact** | A form that actually reaches me |

## Built with

- **[Eleventy](https://www.11ty.dev/)** — static site generator. No framework, no client-side rendering; every page is plain HTML by the time it reaches a browser.
- **[Pico.css](https://picocss.com/)** — classless CSS, so the markup stays readable
- **[Formspree](https://formspree.io/)** — contact form handling without a backend
- **GitHub Actions → GitHub Pages** — every push to `main` rebuilds and redeploys

## Running it locally

```bash
npm install
npm start        # dev server with live reload at http://localhost:8080
npm run build    # one-off production build into _site/
```

## How it's organized

```
_includes/     layouts — base.liquid wraps every page, project.liquid adds project metadata
projects/      one Markdown file per project; front matter drives the index automatically
posts/         blog posts, same idea
css/           custom styles layered over Pico
.github/       the deploy workflow
```

Adding a project means dropping a new `.md` file into `projects/` — the projects
index and the homepage pick it up on the next build. No list to update by hand.

## Elsewhere

- [GitHub](https://github.com/Sg-fit)
- [Charweb](https://charweb.net) — research notes and experiments
