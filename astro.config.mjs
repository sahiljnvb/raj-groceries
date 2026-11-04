import { defineConfig } from 'astro/config';

// On GitHub Actions, derive site/base from the repository automatically.
// owner/repo        -> https://owner.github.io/repo/
// owner/owner.github.io -> https://owner.github.io/
const repoFull = process.env.GITHUB_REPOSITORY;
let site;
let base = '/';

if (repoFull) {
  const [owner, repo] = repoFull.split('/');
  site = `https://${owner.toLowerCase()}.github.io`;
  if (repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`) base = `/${repo}`;
}

export default defineConfig({ site, base });
