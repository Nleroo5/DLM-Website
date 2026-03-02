#!/bin/bash

# Replace Performance Metrics Image (2nd image in blog post)
# Current: 1920x1280 - Too large
# Target: 1200px width for consistency

echo "📊 Downloading replacement performance metrics image..."
echo ""

# Create temp directory
mkdir -p /tmp/blog-performance-image
cd /tmp/blog-performance-image

# Download analytics dashboard image (smaller, more appropriate size)
echo "Downloading analytics performance dashboard..."
curl -L "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "performance-new.jpg"

echo ""
echo "Converting to WebP format (85% quality)..."

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing with Homebrew..."
    brew install webp
fi

# Convert to WebP
cwebp -q 85 performance-new.jpg -o website-performance-metrics-core-web-vitals-comparison.webp

echo ""
echo "Moving image to project..."

# Move to project images directory
PROJECT_DIR="/Users/nicolasleroo/Desktop/DLM-Website/public/images"
mv website-performance-metrics-core-web-vitals-comparison.webp "$PROJECT_DIR/"

# Clean up
rm performance-new.jpg
cd -
rmdir /tmp/blog-performance-image

echo ""
echo "✅ Performance image replaced!"
echo ""

# Show file size
echo "📊 New image size:"
ls -lh "$PROJECT_DIR/website-performance-metrics-core-web-vitals-comparison.webp" | awk '{print $9, $5}'

echo ""
echo "🎉 Complete! New performance metrics image ready."
