import fs from "fs";
import path from "path";

function humanize(value) {
  return value
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildImageText(file, publicPath) {
  const fileName = humanize(path.parse(file).name);
  const folderName = humanize(
    decodeURIComponent(publicPath)
      .split("/")
      .filter(Boolean)
      .pop() || "Mehndi Design"
  );
  const base = fileName.toLowerCase().includes("mehndi")
    ? fileName
    : `${fileName} ${folderName} Mehndi Design`;

  return base.replace(/\s+/g, " ").trim();
}

function getImagesFromDirectory(fullPath, publicPath) {
  if (!fs.existsSync(fullPath)) {
    console.warn(`Image folder not found: ${fullPath}`);
    return [];
  }

  const files = fs.readdirSync(fullPath);

  return files
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => {
      const name = buildImageText(file, publicPath);
      return {
        src: `${publicPath}/${encodeURIComponent(file)}`,
        alt: name,
        title: name,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

// Read images from a public/images subfolder
export function getImagesFromFolder(folderPath) {
  if (!folderPath) return [];

  const fullPath = path.join(process.cwd(), "public", "images", folderPath);

  return getImagesFromDirectory(fullPath, `/images/${folderPath}`);
}

// Read images from a public subfolder outside public/images
export function getImagesFromPublicFolder(folderPath) {
  if (!folderPath) return [];

  const fullPath = path.join(process.cwd(), "public", folderPath);

  return getImagesFromDirectory(fullPath, `/${folderPath}`);
}
