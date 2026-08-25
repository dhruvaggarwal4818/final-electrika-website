import re
import os
import glob

output_file = "C:/Users/Acer/.gemini/antigravity-ide/brain/0028f403-215c-419f-8abf-65a40b0f0996/.system_generated/steps/33/output.txt"
dest_file = "c:/Users/Acer/Desktop/antigravity/src/app/products/[slug]/EmergencyStopButton.tsx"

with open(output_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the instructional text at the bottom
split_index = content.find("SUPER CRITICAL:")
if split_index != -1:
    content = content[:split_index]

# Replace absolute paths to public directory
content = content.replace('c:/Users/Acer/Desktop/website test antigravity/public', '')

# We need to map the SVGs
# Let's get the list of SVGs in the directory
svg_files = glob.glob("c:/Users/Acer/Desktop/website test antigravity/public/figma_assets_20260704/*.svg")
svg_basenames = [os.path.basename(f) for f in svg_files]

# The output has `import { imgSvg, imgSvg1, imgSvg2, imgSvg3, imgSvg4, imgSvg5, imgSvg6, imgSvg7 } from "./svg-2a19p";`
# Let's replace this import with constant declarations
svg_constants = []
for i in range(8):
    var_name = "imgSvg" if i == 0 else f"imgSvg{i}"
    file_name = svg_basenames[i] if i < len(svg_basenames) else ""
    svg_constants.append(f'const {var_name} = "/figma_assets_20260704/{file_name}";')

import_statement = 'import { imgSvg, imgSvg1, imgSvg2, imgSvg3, imgSvg4, imgSvg5, imgSvg6, imgSvg7 } from "./svg-2a19p";'
content = content.replace(import_statement, "\n".join(svg_constants))

with open(dest_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Done")
