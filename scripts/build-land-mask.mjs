import { writeFile } from "node:fs/promises";
import sharp from "sharp";

const SOURCE =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_land.geojson";
const WIDTH = 1024;
const HEIGHT = 512;
const OUT = "public/land-mask.png";

const project = ([lon, lat]) => [
  ((lon + 180) / 360) * WIDTH,
  ((90 - lat) / 180) * HEIGHT,
];

const ringToPath = (ring) =>
  ring
    .map(project)
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(2)} ${y.toFixed(2)}`)
    .join("") + "Z";

const geometryToPaths = (geometry) => {
  if (geometry.type === "Polygon") return geometry.coordinates.map(ringToPath);
  if (geometry.type === "MultiPolygon")
    return geometry.coordinates.flat().map(ringToPath);
  return [];
};

const response = await fetch(SOURCE);
if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
const { features } = await response.json();

const paths = features.flatMap((feature) => geometryToPaths(feature.geometry));
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
<rect width="${WIDTH}" height="${HEIGHT}" fill="black"/>
<path d="${paths.join("")}" fill="white" fill-rule="evenodd"/>
</svg>`;

const png = await sharp(Buffer.from(svg))
  .png({ colors: 2, compressionLevel: 9 })
  .toBuffer();
await writeFile(OUT, png);
console.log(`${OUT} (${png.length} bytes) from ${features.length} features`);
