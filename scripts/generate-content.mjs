import { mkdirSync, writeFileSync } from 'node:fs';
import { projects, studios } from './work-data.mjs';

const workDir = new URL('../src/content/work/', import.meta.url);
const studiosDir = new URL('../src/content/studios/', import.meta.url);
mkdirSync(workDir, { recursive: true });
mkdirSync(studiosDir, { recursive: true });

function yamlString(str) {
  return JSON.stringify(str);
}

for (const p of projects) {
  const vimeoUrl = p.vimeo ? `https://player.vimeo.com/video/${p.vimeo}` : '';
  const frontmatter = [
    '---',
    `title: ${yamlString(p.title)}`,
    `client: ${yamlString(p.client)}`,
    `role: ${yamlString(p.role)}`,
    `category: ${yamlString(p.category)}`,
    `shortDescription: ${yamlString(p.short)}`,
    p.vimeo ? `vimeoUrl: ${yamlString(vimeoUrl)}` : null,
    `thumbnail: ${yamlString(p.thumb)}`,
    `featured: ${p.featured ? 'true' : 'false'}`,
    '---',
    '',
    p.body,
    '',
  ].filter(Boolean).join('\n');
  writeFileSync(new URL(`${p.slug}.md`, workDir), frontmatter);
}

for (const s of studios) {
  const frontmatter = [
    '---',
    `title: ${yamlString(s.title)}`,
    `tagline: ${yamlString(s.tagline)}`,
    `thumbnail: ${yamlString(s.thumb)}`,
    s.bookUrl ? `bookUrl: ${yamlString(s.bookUrl)}` : null,
    '---',
    '',
    s.body,
    '',
  ].filter(Boolean).join('\n');
  writeFileSync(new URL(`${s.slug}.md`, studiosDir), frontmatter);
}

console.log(`Generated ${projects.length} work items and ${studios.length} studio entries.`);
