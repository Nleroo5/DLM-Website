#!/bin/bash

# Replace WordPress Security Image (4th image in blog post)
# Downloading smaller, more appropriate security image

echo "🔒 Downloading replacement security image..."
echo ""

# Create temp directory
mkdir -p /tmp/blog-security-image
cd /tmp/blog-security-image

# Option 1: Digital security/lock image (smaller dimensions, more focused)
echo "Downloading digital security padlock image..."
curl -L "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "security-new.jpg"

echo ""
echo "Converting to WebP format (85% quality)..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing with Homebrew..."
    brew install webp
fi

# Convert to WebP
cwebp -q 85 security-new.jpg -o wordpress-security-vulnerabilities-2026-statistics-chart.webp

echo ""
echo "Moving image to project..."

# Move to project images directory
PROJECT_DIR="/Users/nicolasleroo/Desktop/DLM-Website/public/images"
mv wordpress-security-vulnerabilities-2026-statistics-chart.webp "$PROJECT_DIR/"

# Clean up
rm security-new.jpg
cd -
rmdir /tmp/blog-security-image

echo ""
echo "✅ Security image replaced!"
echo ""

# Show file size
echo "📊 New image size:"
ls -lh "$PROJECT_DIR/wordpress-security-vulnerabilities-2026-statistics-chart.webp" | awk '{print $9, $5}'

echo ""
echo "🎉 Complete! New security image ready."
