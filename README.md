# Portfolio

Personal portfolio built with [Eleventy](https://www.11ty.dev/) and [Pico.css](https://picocss.com/).

## Local development

```bash
npm install
npm start        # dev server at http://localhost:8080
npm run build    # one-off build into _site/
```

## Structure

- `_includes/` — layouts (`base.njk`, `project.njk`)
- `projects/` — one Markdown file per project
- `posts/` — blog posts
- `css/` — custom CSS layered over Pico
- `.github/workflows/deploy.yml` — builds and deploys to GitHub Pages on push to `main`

## Deploying

Push to `main`, then in the repo go to **Settings → Pages** and set
**Source** to **GitHub Actions**.
