#!/bin/bash

# Download 10 relevant images for Meta Ads 2026 blog post
# All images from Pexels (free commercial use)

echo "📸 Downloading Meta Ads 2026 blog images from Pexels..."
echo ""

# Create temp directory
mkdir -p /tmp/meta-ads-blog-images
cd /tmp/meta-ads-blog-images

PROJECT_DIR="/Users/nicolasleroo/Desktop/DLM-Website/public/images"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing with Homebrew..."
    brew install webp
fi

echo "Downloading images..."
echo ""

# 1. HERO IMAGE: Analytics Dashboard showing ROAS metrics
echo "1/10: Meta Ads dashboard analytics..."
curl -L "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "01-hero-dashboard.jpg"

# 2. AI/Andromeda Algorithm: Neural network technology
echo "2/10: AI neural network visualization..."
curl -L "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "02-ai-algorithm.jpg"

# 3. ROAS Calculator: Financial analytics ROI
echo "3/10: ROI calculator analytics..."
curl -L "https://images.pexels.com/photos/7947407/pexels-photo-7947407.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "03-roas-calculator.jpg"

# 4. Meta Pixel Setup: Code development website
echo "4/10: Website code Meta Pixel setup..."
curl -L "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "04-pixel-setup.jpg"

# 5. Campaign Structure: Strategy planning business
echo "5/10: Campaign planning strategy..."
curl -L "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "05-campaign-strategy.jpg"

# 6. Targeting Strategy: Audience demographics chart
echo "6/10: Audience targeting demographics..."
curl -L "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "06-targeting-audience.jpg"

# 7. Creative/UGC: Smartphone video recording content creation
echo "7/10: UGC content creation smartphone..."
curl -L "https://images.pexels.com/photos/4050314/pexels-photo-4050314.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "07-ugc-video-creation.jpg"

# 8. Budget Management: Financial charts graphs
echo "8/10: Budget management charts..."
curl -L "https://images.pexels.com/photos/7948047/pexels-photo-7948047.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "08-budget-charts.jpg"

# 9. Analytics Tracking: Performance dashboard metrics
echo "9/10: Analytics performance tracking..."
curl -L "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "09-analytics-tracking.jpg"

# 10. Success Results: Business growth celebration
echo "10/10: Business success results..."
curl -L "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1200" -o "10-success-results.jpg"

echo ""
echo "Converting all images to WebP format (85% quality)..."
echo ""

# Convert all to WebP
cwebp -q 85 01-hero-dashboard.jpg -o meta-ads-2026-roas-dashboard-performance.webp
cwebp -q 85 02-ai-algorithm.jpg -o meta-ads-andromeda-ai-algorithm-visualization.webp
cwebp -q 85 03-roas-calculator.jpg -o meta-ads-roas-calculator-analytics-chart.webp
cwebp -q 85 04-pixel-setup.jpg -o meta-pixel-setup-installation-code-website.webp
cwebp -q 85 05-campaign-strategy.jpg -o advantage-plus-campaign-strategy-planning.webp
cwebp -q 85 06-targeting-audience.jpg -o meta-ads-audience-targeting-demographics.webp
cwebp -q 85 07-ugc-video-creation.jpg -o ugc-video-content-creation-smartphone.webp
cwebp -q 85 08-budget-charts.jpg -o meta-ads-budget-management-scaling-charts.webp
cwebp -q 85 09-analytics-tracking.jpg -o meta-ads-analytics-performance-tracking.webp
cwebp -q 85 10-success-results.jpg -o meta-ads-success-business-growth-results.webp

echo ""
echo "Moving images to project directory..."
echo ""

# Move all WebP files to project
mv *.webp "$PROJECT_DIR/"

# Clean up
rm *.jpg
cd -
rmdir /tmp/meta-ads-blog-images

echo ""
echo "✅ All 10 images downloaded and optimized!"
echo ""

# Show file sizes
echo "📊 Image sizes:"
ls -lh "$PROJECT_DIR"/meta-ads-*.webp | awk '{print $9, $5}'

echo ""
echo "🎉 Complete! All Meta Ads 2026 blog images ready."
echo ""
echo "Images added:"
echo "1. meta-ads-2026-roas-dashboard-performance.webp (Hero)"
echo "2. meta-ads-andromeda-ai-algorithm-visualization.webp"
echo "3. meta-ads-roas-calculator-analytics-chart.webp"
echo "4. meta-pixel-setup-installation-code-website.webp"
echo "5. advantage-plus-campaign-strategy-planning.webp"
echo "6. meta-ads-audience-targeting-demographics.webp"
echo "7. ugc-video-content-creation-smartphone.webp"
echo "8. meta-ads-budget-management-scaling-charts.webp"
echo "9. meta-ads-analytics-performance-tracking.webp"
echo "10. meta-ads-success-business-growth-results.webp"
