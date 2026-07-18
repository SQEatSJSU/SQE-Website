import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".JPG", ".JPEG", ".PNG", ".WEBP"]);

/** Paths that should stay PNG (logos / icons / transparency) */
function isLogoLike(relPath) {
  const p = relPath.replace(/\\/g, "/").toLowerCase();
  return (
    p.includes("/favicon/") ||
    p.endsWith("favicon.png") ||
    p.endsWith("icon.png") ||
    p.includes("/logos/") ||
    p.includes("blochlogo") ||
    p.includes("whitelogo")
  );
}

function maxWidthFor(relPath) {
  const p = relPath.replace(/\\/g, "/").toLowerCase();
  if (isLogoLike(relPath)) return 512;
  if (p.includes("/members/")) return 800;
  if (p.includes("home.jpeg") || p.includes("unboxing") || p.includes("/community/lab"))
    return 1600;
  return 1400;
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (IMAGE_EXTS.has(path.extname(entry.name))) files.push(full);
  }
  return files;
}

async function compressFile(filePath, renames) {
  const rel = path.relative(PUBLIC_DIR, filePath);
  const ext = path.extname(filePath);
  const extLower = ext.toLowerCase();
  const before = fs.statSync(filePath).size;
  const maxW = maxWidthFor(rel);

  // Skip tiny already-optimized assets
  if (before < 40_000 && !rel.toLowerCase().includes("/members/")) {
    return { rel, before, after: before, skipped: true };
  }

  const image = sharp(filePath, { failOn: "none" });
  const meta = await image.metadata();
  let pipeline = sharp(filePath, { failOn: "none" }).rotate();

  if (meta.width && meta.width > maxW) {
    pipeline = pipeline.resize({ width: maxW, withoutEnlargement: true });
  }

  const logo = isLogoLike(rel);

  // Convert photo PNGs → JPEG (same basename) for much smaller files
  if (extLower === ".png" && !logo) {
    const outPath = filePath.replace(/\.png$/i, ".jpg");
    const buf = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
    fs.writeFileSync(outPath, buf);
    if (path.resolve(outPath) !== path.resolve(filePath)) {
      fs.unlinkSync(filePath);
      renames.push({
        from: "/" + rel.replace(/\\/g, "/"),
        to: "/" + path.relative(PUBLIC_DIR, outPath).replace(/\\/g, "/"),
      });
    }
    const after = fs.statSync(outPath).size;
    return { rel: path.relative(PUBLIC_DIR, outPath), before, after };
  }

  let buf;
  if (extLower === ".png" || extLower === ".webp") {
    buf = await pipeline
      .png({ compressionLevel: 9, quality: 80, effort: 8 })
      .toBuffer();
  } else {
    // jpg / jpeg / JPG
    buf = await pipeline.jpeg({ quality: 78, mozjpeg: true }).toBuffer();
  }

  // Only write if smaller (or meaningfully resized)
  if (buf.length < before * 0.98 || (meta.width && meta.width > maxW)) {
    fs.writeFileSync(filePath, buf);
  }

  const after = fs.statSync(filePath).size;
  return { rel, before, after };
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

const files = walk(PUBLIC_DIR);
const renames = [];
let totalBefore = 0;
let totalAfter = 0;

console.log(`Compressing ${files.length} images in public/...\n`);

for (const file of files) {
  try {
    const result = await compressFile(file, renames);
    totalBefore += result.before;
    totalAfter += result.after;
    const saved = result.before - result.after;
    const tag = result.skipped
      ? "skip"
      : saved > 0
        ? `-${formatBytes(saved)}`
        : "same";
    console.log(`${tag.padEnd(12)} ${result.rel}  (${formatBytes(result.before)} → ${formatBytes(result.after)})`);
  } catch (err) {
    console.error(`FAIL ${path.relative(PUBLIC_DIR, file)}: ${err.message}`);
  }
}

console.log("\n---");
console.log(`Before: ${formatBytes(totalBefore)}`);
console.log(`After:  ${formatBytes(totalAfter)}`);
console.log(`Saved:  ${formatBytes(totalBefore - totalAfter)}`);

if (renames.length) {
  const mapPath = path.resolve("scripts/image-renames.json");
  fs.writeFileSync(mapPath, JSON.stringify(renames, null, 2));
  console.log(`\nWrote ${renames.length} renames to scripts/image-renames.json`);
}
