// scripts/resize-images.js
import fs from "fs";
import path from "path";
import sharp from "sharp";

// Folder input gambar original
const inputFolder = "./public";
// Folder output hasil optimasi
const outputFolder = "./public/optimized";

// Ukuran yang akan dibuat
const sizes = [
  { suffix: "-small", width: 240 },
  { suffix: "-medium", width: 320 },
  { suffix: "-large", width: 480 },
];

// Bikin folder output jika belum ada
fs.mkdirSync(outputFolder, { recursive: true });

// Proses semua file di folder input
fs.readdirSync(inputFolder).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const baseName = path.basename(file, ext);

  // Skip kalau bukan file gambar
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  sizes.forEach(({ suffix, width }) => {
    sharp(path.join(inputFolder, file))
      .resize({ width })
      .webp({ quality: 70 }) // kompresi ringan
      .toFile(path.join(outputFolder, `${baseName}${suffix}.webp`))
      .then(() => {
        console.log(`✅ ${baseName}${suffix}.webp saved`);
      })
      .catch((err) => {
        console.error(`❌ Error processing ${file}:`, err);
      });
  });
});
