# Aseem Raheem - Portfolio

Static site: HTML + CSS + vanilla JS. No build step.

- `index.html` page structure and SEO tags
- `style.css` black and gold theme (colors are variables at the top)
- `script.js` **all your content** (PROFILE, SKILLS, PROJECTS, EXPERIENCE) plus interactions
- `assets/images/aseem-raheem-profile.jpg` your profile photo (used in the hero and About sections)

## Run locally (Windows)
Open the folder in VS Code, install the "Live Server" extension, right-click `index.html` -> Open with Live Server.

## Deploy to GitHub Pages (PowerShell)
Create a **public** repo named `aseemraheem.github.io` on github.com (empty, no README), then:

```powershell
cd path\to\portfolio
git init
git add .
git commit -m "Add portfolio"
git branch -M main
git remote add origin https://github.com/aseemraheem/aseemraheem.github.io.git
git push -u origin main
```

Then: repo **Settings -> Pages -> Build and deployment -> Deploy from a branch -> main, / (root) -> Save**.
After a minute or two the site is live at https://aseemraheem.github.io/. `index.html` must sit in the repo root. GitHub Pages sites are public.

Update later: edit files, then `git add .`, `git commit -m "Update"`, `git push`.

## Before publishing

