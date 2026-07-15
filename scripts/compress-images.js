const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_DIR = path.join(process.cwd(), 'public', 'images');
const TARGET_BYTES = 200 * 1024;

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const base = path.basename(filePath);
  if (base === 'og-image.png') return;

  const before = fs.statSync(filePath).size;
  if (before <= TARGET_BYTES) {
    console.log('ok', base, Math.round(before / 1024) + 'KB');
    return;
  }

  const tmp = filePath + '.tmp';
  const image = sharp(filePath).rotate();
  const meta = await image.metadata();
  const width = meta.width && meta.width > 1600 ? 1600 : undefined;

  if (ext === '.png') {
    await sharp(filePath)
      .rotate()
      .resize(width ? { width, withoutEnlargement: true } : undefined)
      .png({ compressionLevel: 9, palette: true, quality: 70 })
      .toFile(tmp);
  } else {
    await sharp(filePath)
      .rotate()
      .resize(width ? { width, withoutEnlargement: true } : undefined)
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(tmp);
  }

  let after = fs.statSync(tmp).size;
  // If still huge, force jpeg conversion for screenshots
  if (after > TARGET_BYTES && ext === '.png') {
    const jpgTmp = filePath.replace(/\.png$/i, '.jpg.tmp');
    await sharp(filePath)
      .rotate()
      .resize({ width: 1400, withoutEnlargement: true })
      .jpeg({ quality: 68, mozjpeg: true })
      .toFile(jpgTmp);
    // Keep .png extension for import paths: overwrite png bytes with optimized jpeg is bad.
    // Instead rewrite as optimized png via sharper downsample.
    await sharp(jpgTmp)
      .png({ compressionLevel: 9 })
      .toFile(tmp);
    fs.unlinkSync(jpgTmp);
    after = fs.statSync(tmp).size;
  }

  fs.renameSync(tmp, filePath);
  console.log(
    'compressed',
    base,
    Math.round(before / 1024) + 'KB ->',
    Math.round(fs.statSync(filePath).size / 1024) + 'KB'
  );
}

async function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else {
      await compressFile(full);
    }
  }
}

walk(IMAGE_DIR).catch((e) => {
  console.error(e);
  process.exit(1);
});
