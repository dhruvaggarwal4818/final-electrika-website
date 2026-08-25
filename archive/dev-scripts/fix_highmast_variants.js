const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Acer/Desktop/website test antigravity/src/app/products/[slug]';
const products = [
  { tsx: 'HighMastPoles.tsx', css: 'high-mast-poles.module.css' },
  { tsx: 'FlagMastPoles.tsx', css: 'flag-mast-poles.module.css' },
  { tsx: 'LoweringMechanisms.tsx', css: 'lowering-mechanisms.module.css' },
  { tsx: 'GiOctagonalPole.tsx', css: 'gi-octagonal-pole.module.css' },
  { tsx: 'LatchingMast.tsx', css: 'latching-mast.module.css' }
];

const variantsCssBlock = `
/* 5. Variants Section / Select the Right Height */
.variantsSection {
  background-color: #f8f9fb;
  padding: 80px 0;
}

.variantsGrid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  margin-top: 40px;
}

.variantCard {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}

.variantCard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.08);
}

.variantHeader {
  margin-bottom: 16px;
}

.variantBadge {
  background-color: #f0f2f5;
  color: #666666;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 12px;
  letter-spacing: 0.5px;
}

.variantTitleBox {
  display: flex;
  align-items: baseline;
  margin-bottom: 8px;
}

.variantHeight {
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 800;
  color: #0d0d1a;
  line-height: 1;
}

.variantUnit {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #666666;
  margin-left: 4px;
}

.variantDesc {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin-top: 0;
  margin-bottom: 12px;
}

.variantDetail {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #888888;
  margin: 0;
}

@media (max-width: 1200px) {
  .variantsGrid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .variantsGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .variantsGrid {
    grid-template-columns: 1fr;
  }
}
`;

products.forEach(p => {
  // Update TSX
  const tsxPath = path.join(dir, p.tsx);
  if (fs.existsSync(tsxPath)) {
    let content = fs.readFileSync(tsxPath, 'utf8');
    content = content.replace(/style=\{\{\s*borderRadius:\s*'50px'\s*\}\}/g, '');
    fs.writeFileSync(tsxPath, content, 'utf8');
  }

  // Update CSS
  const cssPath = path.join(dir, p.css);
  if (fs.existsSync(cssPath)) {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // Fix heroImageWrapper
    css = css.replace(/aspect-ratio: 570 \/ 427\.5;/g, 'height: 500px;');
    // Fix heroVisual to center the image if needed
    css = css.replace(/justify-content: flex-end;/g, 'justify-content: center; align-items: center;');
    
    // Add variants CSS if not present
    if (!css.includes('.variantsGrid')) {
      css += '\n' + variantsCssBlock;
    }
    
    fs.writeFileSync(cssPath, css, 'utf8');
  }
});

console.log('Fixed variants css and image alignment.');
