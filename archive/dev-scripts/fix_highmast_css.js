const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/Acer/Desktop/website test antigravity/src/app/products/[slug]';
const sourceCss = path.join(dir, 'mcb-box.module.css');

const files = [
  { tsx: 'HighMastPoles.tsx', css: 'high-mast-poles.module.css' },
  { tsx: 'LoweringMechanisms.tsx', css: 'lowering-mechanisms.module.css' },
  { tsx: 'GiOctagonalPole.tsx', css: 'gi-octagonal-pole.module.css' },
  { tsx: 'LatchingMast.tsx', css: 'latching-mast.module.css' }
];

files.forEach(f => {
  // 1. Copy CSS
  const destCss = path.join(dir, f.css);
  fs.copyFileSync(sourceCss, destCss);

  // 2. Update TSX
  const tsxPath = path.join(dir, f.tsx);
  if (fs.existsSync(tsxPath)) {
      let content = fs.readFileSync(tsxPath, 'utf8');
      
      // Replace import
      content = content.replace(/import styles from "\.\/product\.module\.css";/g, `import styles from "./${f.css}";`);
      
      // Replace featuresGrid6
      content = content.replace(/styles\.featuresGrid6/g, 'styles.featuresGrid');
      
      fs.writeFileSync(tsxPath, content, 'utf8');
      console.log(`Updated ${f.tsx}`);
  } else {
      console.log(`File not found: ${f.tsx}`);
  }
});

console.log('Done mapping high mast products');
