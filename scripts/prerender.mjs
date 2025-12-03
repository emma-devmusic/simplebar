import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import * as ReactDOMServer from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Polyfill browser APIs for SSR
global.localStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};

global.window = {
  matchMedia: () => ({
    matches: false,
    addEventListener: () => {},
    removeEventListener: () => {},
  }),
  scrollY: 0,
  addEventListener: () => {},
  removeEventListener: () => {},
  scrollTo: () => {},
};

global.document = {
  querySelector: () => null,
};

async function prerender() {
  const server = await createServer({
    root: rootDir,
    server: { middlewareMode: true },
    appType: 'custom',
    resolve: {
      alias: {
        // During SSR prerender, alias react-router-dom to a lightweight shim to avoid CJS named export issues
        'react-router-dom': path.join(rootDir, 'src/prerender/router-ssr-shim.ts')
      }
    }
  });

  try {
    // Load our prerender app tree via Vite SSR
    const mod = await server.ssrLoadModule('/src/prerender/AppPrerender.tsx');
    const { createAppTree } = mod;
    const { element } = createAppTree();

    const appHtml = ReactDOMServer.renderToString(element);

    // Read the BUILT index.html from dist/ (already processed by Vite with correct script tags)
    const outDir = path.join(rootDir, 'dist');
    const outFile = path.join(outDir, 'index.html');
    
    if (!fs.existsSync(outFile)) {
      throw new Error('dist/index.html not found. Run "vite build" first.');
    }

    let template = fs.readFileSync(outFile, 'utf-8');

    // Since we're not using Helmet during SSR, meta tags from index.html will be preserved
    // They are already optimized for SEO

    // Inject rendered app into root (replace empty div with prerendered content)
    template = template.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    fs.writeFileSync(outFile, template, 'utf-8');
    console.log(`✔ Prerendered HTML written to ${outFile}`);
  } finally {
    await server.close();
  }
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
