#!/bin/bash

# Blog Post Image Download and Optimization Script
# For Next.js vs WordPress 2026 Blog Post

echo "🎨 Downloading and optimizing blog post images..."
echo ""

# Create temp directory
mkdir -p /tmp/blog-images
cd /tmp/blog-images

echo "📥 Step 1: Downloading images from Pexels/Unsplash..."
echo ""

# Image 1: Hero - Modern Web Development
echo "1/8 Downloading hero image..."
curl -L "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=1920" -o "hero-raw.jpg"

# Image 2: Performance Analytics Dashboard
echo "2/8 Downloading performance dashboard..."
curl -L "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80" -o "performance-raw.jpg"

# Image 3: Data Analytics Graphs
echo "3/8 Downloading analytics graphs..."
curl -L "https://images.pexels.com/photos/7109316/pexels-photo-7109316.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "analytics-raw.jpg"

# Image 4: Cybersecurity
echo "4/8 Downloading security image..."
curl -L "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "security-raw.jpg"

# Image 5: Business Dashboard
echo "5/8 Downloading business dashboard..."
curl -L "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" -o "business-raw.jpg"

# Image 6: Code Architecture
echo "6/8 Downloading code architecture..."
curl -L "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1600" -o "code-raw.jpg"

# Image 7: Developer Workspace
echo "7/8 Downloading developer workspace..."
curl -L "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "workspace-raw.jpg"

# Image 8: Modern Development
echo "8/8 Downloading modern development..."
curl -L "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "modern-dev-raw.jpg"

echo ""
echo "✅ All images downloaded!"
echo ""

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing with Homebrew..."
    brew install webp
fi

echo "🔧 Step 2: Converting to WebP format (85% quality)..."
echo ""

# Convert all images to WebP
cwebp -q 85 hero-raw.jpg -o nextjs-vs-wordpress-website-development-comparison.webp
cwebp -q 85 performance-raw.jpg -o website-performance-metrics-core-web-vitals-comparison.webp
cwebp -q 85 analytics-raw.jpg -o nextjs-wordpress-load-time-speed-comparison-chart.webp
cwebp -q 85 security-raw.jpg -o wordpress-security-vulnerabilities-2026-statistics-chart.webp
cwebp -q 85 business-raw.jpg -o nextjs-wordpress-cost-comparison-3-year-breakdown.webp
cwebp -q 85 code-raw.jpg -o nextjs-static-generation-architecture-cdn-deployment.webp
cwebp -q 85 workspace-raw.jpg -o nextjs-headless-cms-content-management-options.webp
cwebp -q 85 modern-dev-raw.jpg -o development-workflow-nextjs-wordpress-efficiency.webp

echo "✅ All images converted to WebP!"
echo ""

echo "📦 Step 3: Moving images to project..."
echo ""

# Move to project images directory
PROJECT_DIR="/Users/nicolasleroo/Desktop/DLM-Website/public/images"
mv *.webp "$PROJECT_DIR/"

# Clean up
rm *.jpg
cd -
rmdir /tmp/blog-images

echo "✅ Images moved to $PROJECT_DIR"
echo ""

# Show file sizes
echo "📊 Image sizes:"
ls -lh "$PROJECT_DIR"/*.webp | grep "nextjs\|wordpress\|development-workflow" | awk '{print $9, $5}'

echo ""
echo "🎉 Complete! All 8 images ready for blog post."
echo ""
echo "Next steps:"
echo "1. Review images in /public/images/"
echo "2. Run the blog post update script"
echo "3. Test locally with 'npm run dev'"
echo "4. Commit and push to deploy"
