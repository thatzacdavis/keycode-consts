// Writes per-folder package.json markers so Node interprets each build output
// correctly under the root package's "type": "module". Run after the tsc builds.
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const targets = [
    { dir: 'dist/esm', type: 'module' },
    { dir: 'dist/cjs', type: 'commonjs' },
];

for (const { dir, type } of targets) {
    const outDir = resolve(root, dir);
    await mkdir(outDir, { recursive: true });
    await writeFile(resolve(outDir, 'package.json'), `${JSON.stringify({ type }, null, 2)}\n`);
}
