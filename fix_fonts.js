const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Acer/Desktop/website test antigravity/src/app/products/[slug]';
const products = [
  'high-mast-poles.module.css',
  'flag-mast-poles.module.css',
  'lowering-mechanisms.module.css',
  'gi-octagonal-pole.module.css',
  'latching-mast.module.css'
];

products.forEach(cssFile => {
  const cssPath = path.join(dir, cssFile);
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Replace 'Inter' font usages with var(--font-poppins)
    css = css.replace(/font-family:\s*'Inter',\s*sans-serif;/g, 'font-family: var(--font-poppins);');
    css = css.replace(/font-family:\s*Inter,\s*sans-serif;/g, 'font-family: var(--font-poppins);');
    css = css.replace(/font-family:\s*'Inter';/g, 'font-family: var(--font-poppins);');
    
    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log('Fonts updated to Poppins.');
