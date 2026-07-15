const sharp = require('sharp');
const fs = require('fs');

(async () => {
  const head = 'public/images/headshort.jpg';
  await sharp(head).resize(180, 180, { fit: 'cover' }).png().toFile('public/apple-touch-icon.png');

  const bg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0a1214"/>
          <stop offset="100%" stop-color="#122a2c"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#g)"/>
      <text x="72" y="260" font-family="Georgia, serif" font-size="56" fill="#f4f7f6" font-weight="700">Riaz Ahmad Butt</text>
      <text x="72" y="330" font-family="Arial, sans-serif" font-size="32" fill="#2DD4BF">Full Stack Developer</text>
      <text x="72" y="390" font-family="Arial, sans-serif" font-size="22" fill="#9bb0ad">MERN · Next.js · TypeScript · Islamabad</text>
      <rect x="72" y="430" width="72" height="4" fill="#2DD4BF"/>
    </svg>
  `);
  await sharp(bg).png().toFile('public/images/og-image.png');
  console.log('ok', fs.statSync('public/apple-touch-icon.png').size, fs.statSync('public/images/og-image.png').size);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
