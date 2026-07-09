const fs = require('fs');
const path = require('path');

const outputFile = 'C:/Users/Acer/.gemini/antigravity-ide/brain/0028f403-215c-419f-8abf-65a40b0f0996/.system_generated/steps/33/output.txt';
const destFile = 'c:/Users/Acer/Desktop/antigravity/src/app/products/[slug]/EmergencyStopButton.tsx';
const svgDir = 'c:/Users/Acer/Desktop/website test antigravity/public/figma_assets_20260704';

let content = fs.readFileSync(outputFile, 'utf8');

const splitIndex = content.indexOf('SUPER CRITICAL:');
if (splitIndex !== -1) {
    content = content.substring(0, splitIndex);
}

content = content.replace(/c:\/Users\/Acer\/Desktop\/website test antigravity\/public/g, '');

const svgFiles = fs.readdirSync(svgDir).filter(f => f.endsWith('.svg'));

let svgConstants = [];
for (let i = 0; i < 8; i++) {
    const varName = i === 0 ? 'imgSvg' : `imgSvg${i}`;
    const fileName = svgFiles[i] || '';
    svgConstants.push(`const ${varName} = "/figma_assets_20260704/${fileName}";`);
}

const importStatement = 'import { imgSvg, imgSvg1, imgSvg2, imgSvg3, imgSvg4, imgSvg5, imgSvg6, imgSvg7 } from "./svg-2a19p";';
content = content.replace(importStatement, svgConstants.join('\n'));

fs.writeFileSync(destFile, content, 'utf8');
console.log('Done');
