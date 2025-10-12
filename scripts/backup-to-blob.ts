// Run this script to backup your images to Vercel Blob Storage
// Usage: npx tsx scripts/backup-to-blob.ts

import { put } from '@vercel/blob';
import * as fs from 'fs';
import * as path from 'path';

async function backupFolder(localPath: string, blobPrefix: string = '') {
  const files = fs.readdirSync(localPath);

  for (const file of files) {
    const filePath = path.join(localPath, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Recursively backup subdirectories
      await backupFolder(filePath, `${blobPrefix}${file}/`);
    } else if (stats.isFile()) {
      // Skip non-image files
      if (!file.match(/\.(png|jpg|jpeg|gif|webp|svg)$/i)) {
        continue;
      }

      const fileBuffer = fs.readFileSync(filePath);
      const blobPath = `backup/${blobPrefix}${file}`;

      console.log(`📦 Backing up ${blobPath}...`);

      try {
        const blob = await put(blobPath, fileBuffer, {
          access: 'public',
        });

        console.log(`✅ Backed up: ${blob.url}`);
      } catch (error) {
        console.error(`❌ Failed to backup ${blobPath}:`, error);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting backup to Vercel Blob...\n');

  // Backup all images
  await backupFolder('./public/images', 'images/');

  console.log('\n✨ Backup complete!');
}

main();
