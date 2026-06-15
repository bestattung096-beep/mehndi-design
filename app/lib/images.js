import fs from "fs";
import path from "path";

const IMAGES_MANIFEST_PATH = path.join(process.cwd(), "app", "data", "images.json");
let imagesManifest = {};

try {
  const raw = fs.readFileSync(IMAGES_MANIFEST_PATH, "utf-8");
  imagesManifest = JSON.parse(raw);
} catch (error) {
  console.warn(`Could not load images manifest: ${IMAGES_MANIFEST_PATH}`);
}

function getImagesForFolder(folderPath) {
  if (!folderPath) return [];
  return imagesManifest[folderPath] ?? [];
}

export function getImagesFromFolder(folderPath) {
  return getImagesForFolder(folderPath);
}

export function getImagesFromPublicFolder(folderPath) {
  return getImagesForFolder(folderPath);
}
