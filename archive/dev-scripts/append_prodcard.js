const fs = require('fs');

const destFile = 'c:/Users/Acer/Desktop/antigravity/src/app/products/[slug]/EmergencyStopButton.tsx';
let content = fs.readFileSync(destFile, 'utf8');

const newComponent = `
const imgImgHenselEmergencyStopBox = "/figma_assets_20260704_2/b88d43a176720ae6394d27a20884f48f294c9196.png";
const imgProdBadge = "/figma_assets_20260704_2/57b9fdbe63ae3904bf7fbf59cd90e8853183bd7f.png";

export function ProdCard() {
  return (
    <div className="bg-white border-[#e8ecf0] border-[0.8px] border-solid overflow-clip relative rounded-[12px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.07)] size-full" data-node-id="1:323" data-name="prod-card">
      <div className="absolute bg-[#f7f8fa] h-[145px] left-0 overflow-clip top-0 w-[248.113px]" data-node-id="1:324" data-name="prod-img">
        <div className="absolute h-[145px] left-0 top-0 w-[248.113px]" data-node-id="1:325" data-name="Img: Hensel Emergency Stop Box">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImgHenselEmergencyStopBox} />
        </div>
      </div>
      <div className="absolute h-[18.8px] left-[9px] rounded-[5px] top-[9px] w-[50.525px]" data-node-id="1:326" data-name="prod-badge">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[5px] size-full" src={imgProdBadge} />
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[12.8px] left-[8px] not-italic text-[8px] text-white top-[3px] tracking-[0.8px] whitespace-nowrap" data-node-id="1:327">
          HENSEL
        </p>
      </div>
      <div className="absolute h-[112.5px] left-0 top-[145px] w-[248.113px]" data-node-id="1:328" data-name="prod-body">
        <p className="[word-break:break-word] absolute font-['Poppins:Bold'] leading-[20.8px] left-[14px] not-italic text-[#0d1117] text-[13px] top-[14px] w-[228.113px]" data-node-id="1:329">
          Emergency Stop Boxes
        </p>
        <p className="[word-break:break-word] absolute font-['Poppins:Regular'] leading-[17.05px] left-[14px] not-italic text-[#6b7280] text-[11px] top-[38.8px] w-[228.113px]" data-node-id="1:330">
          IP65 push-button enclosures — EM STOP for industrial machinery
        </p>
        <div className="absolute h-[17.6px] left-[14px] top-[80.9px] w-[76.425px]" data-node-id="1:331" data-name="prod-link">
          <p className="[word-break:break-word] absolute font-['Poppins:Bold'] font-bold leading-[17.6px] left-0 text-[#1a9fd8] text-[11px] top-[0.8px] whitespace-nowrap" data-node-id="1:332">
            View specs →
          </p>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync(destFile, content + '\\n' + newComponent, 'utf8');
console.log('Appended successfully');
