import { mkdirSync, writeFileSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const workDir = new URL('../src/content/work/', import.meta.url);
const studiosDir = new URL('../src/content/studios/', import.meta.url);
const imgWorkDir = new URL('../public/images/work/', import.meta.url);
const imgStudiosDir = new URL('../public/images/studios/', import.meta.url);
mkdirSync(imgWorkDir, { recursive: true });
mkdirSync(imgStudiosDir, { recursive: true });

function slugFromUrl(url) {
  const file = decodeURIComponent(url.split('/').pop().split('?')[0]);
  return file.replace(/[^a-zA-Z0-9.+-]/g, '-').replace(/-+/g, '-');
}

async function processDir(dir, publicDir, publicPrefix) {
  const files = readdirSync(dir).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const filePath = new URL(file, dir);
    let content = readFileSync(filePath, 'utf8');
    const match = content.match(/thumbnail: "([^"]+)"/);
    if (!match) continue;
    const url = match[1];
    if (!url.startsWith('http')) continue;
    const filename = slugFromUrl(url);
    const localPath = `${publicPrefix}${filename}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(new URL(filename, publicDir), buf);
      content = content.replace(`thumbnail: "${url}"`, `thumbnail: "${localPath}"`);
      writeFileSync(filePath, content);
      console.log(`OK   ${file} -> ${localPath}`);
    } catch (err) {
      console.error(`FAIL ${file}: ${err.message}`);
    }
  }
}

await processDir(workDir, imgWorkDir, '/images/work/');
await processDir(studiosDir, imgStudiosDir, '/images/studios/');
console.log('Done.');
