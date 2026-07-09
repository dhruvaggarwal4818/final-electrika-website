const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Acer/Desktop/website test antigravity/src/app/products/[slug]';
const products = [
  'flag-mast-poles.module.css',
  'lowering-mechanisms.module.css',
  'gi-octagonal-pole.module.css',
  'latching-mast.module.css'
];

products.forEach(cssFile => {
  const cssPath = path.join(dir, cssFile);
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Fix heroImageWrapper
    css = css.replace(/height: 500px;/g, 'aspect-ratio: 4 / 3;');
    css = css.replace(/border-radius: 16px;/g, 'border-radius: 50px;');
    
    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log('Fixed hero alignment and border-radius in all CSS files.');
