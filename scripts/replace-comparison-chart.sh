#!/bin/bash

# Replace Performance Comparison Chart (3rd image in blog post)
# Current: 1200x1800 - Too tall
# Target: 1200x1200 (1:1 square ratio)

echo "📊 Downloading replacement comparison chart image..."
echo ""

# Create temp directory
mkdir -p /tmp/blog-comparison-image
cd /tmp/blog-comparison-image

# Download analytics/comparison image (square format)
echo "Downloading performance comparison chart..."
curl -L "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "comparison-new.jpg"

echo ""
echo "Converting to WebP format (85% quality)..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing with Homebrew..."
    brew install webp
fi

# Convert to WebP
cwebp -q 85 comparison-new.jpg -o nextjs-wordpress-load-time-speed-comparison-chart.webp

echo ""
echo "Moving image to project..."

# Move to project images directory
PROJECT_DIR="/Users/nicolasleroo/Desktop/DLM-Website/public/images"
mv nextjs-wordpress-load-time-speed-comparison-chart.webp "$PROJECT_DIR/"

# Clean up
rm comparison-new.jpg
cd -
rmdir /tmp/blog-comparison-image

echo ""
echo "✅ Comparison chart replaced!"
echo ""

# Show file size
echo "📊 New image size:"
ls -lh "$PROJECT_DIR/nextjs-wordpress-load-time-speed-comparison-chart.webp" | awk '{print $9, $5}'

echo ""
echo "🎉 Complete! New comparison chart ready (1:1 square ratio)."
