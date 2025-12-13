#!/bin/bash

# Download script for Meta Pixel blog images
# This script uses curl with proper headers to bypass hotlink protection

cd /Users/nicolasleroo/Desktop/DLM-Website/public/images/

echo "Starting image downloads..."
echo ""

# MeasureSchool images (with referrer header)
echo "Downloading MeasureSchool images..."

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "connect-data-sources-events-manager.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Connect-data-sources-in-Meta-Events-Manager.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "choose-web-data-source-meta.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Data-sources-to-choose-from-in-Meta-Events-Manager-1024x355.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "pixel-installation-methods-overview.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Pixel-installing-options-in-the-events-manager-1024x760.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "meta-partner-integrations-shopify-wordpress.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Meta-partner-integrations-to-install-the-Pixel-1024x713.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "meta-pixel-created-confirmation.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Pixel-created-in-Meta-1024x443.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "create-new-tag-google-tag-manager.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Creating-a-new-tag-in-GTM-1024x385.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "gtm-facebook-pixel-template-gallery.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Facebook-pixel-template-in-GTM-template-gallery-1024x459.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "add-facebook-pixel-tag-gtm-workspace.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Add-Facebook-pixel-tag-to-GTM-workspace-1024x552.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "configure-meta-pixel-id-gtm.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Adding-Meta-Pixel-ID-in-tag-configuration-1024x566.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "setup-trigger-meta-pixel-gtm.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Trigger-for-Meta-pixel-tag-1024x609.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "google-tag-manager-preview-mode.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Tag-Manager-preview-mode-1024x834.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "meta-pixel-firing-tag-assistant.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Meta-base-pixel-firing-in-Google-Tag-Assistant-964x1024.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "custom-html-tag-gtm.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Custom-HTML-tag-in-GTM-1024x480.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "meta-base-code-custom-html-gtm.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Meta-base-code-in-custom-HTML-tag-1024x602.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "pixel-helper-showing-events-details.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Meta-Pixel-helper-extension-showing-pixel-details-and-tracked-events-1024x387.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "test-events-tab-meta-events-manager.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Test-events-tab-in-Meta-Events-Manager-1024x571.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "events-received-test-events-tab.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Events-received-in-the-test-events-tab-1024x366.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "expanded-event-details-verification.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Expanded-event-details-1024x477.webp"

curl -H "Referer: https://measureschool.com/" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" \
  -o "pixel-pageview-events-domain-verification.webp" \
  "https://measureschool.com/wp-content/uploads/2024/03/Pixel-showing-pageview-events-and-the-website-domain-its-installed-on-1024x467.webp"

echo "MeasureSchool downloads complete!"
echo ""

# Disruptive Advertising images
echo "Downloading Disruptive Advertising images..."

curl -o "meta-business-suite-all-tools.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/How-to-find-all-tools-in-Business-Suite.jpg"

curl -o "locate-events-manager-business-suite.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/How-to-find-events-manager-in-Business-Suite.jpg"

curl -o "meta-events-manager-overview.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Events-Manager-Overview-Facebook.jpg"

curl -o "connect-website-activity-meta-pixel.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Connect-website-activity-using-Facebook-Pixel.jpg"

curl -o "wordpress-head-footer-code-manager-plugin.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/head-footer-code-manager-in-WP.jpg"

curl -o "add-meta-pixel-code-hfcm-wordpress.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Adding-Meta-Pixel-using-HFCM-in-WordPress.jpg"

curl -o "copy-meta-pixel-base-code.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/How-to-install-base-Meta-Pixel-code.jpg"

curl -o "meta-pixel-code-placement-header.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Where-to-put-Meta-Pixel-code-on-website.jpg"

curl -o "meta-pixel-helper-chrome-extension.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Facebook-Pixel-Helper.jpg"

curl -o "standard-events-code-example.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Standard-Meta-Pixel-events-on-a-web-page.jpg"

curl -o "automatic-advanced-matching-meta-pixel.jpg" \
  "https://wp.disruptiveadvertising.com/wp-content/uploads/2023/03/Automatic-Advanced-Matching.jpg"

echo "Disruptive Advertising downloads complete!"
echo ""
echo "All downloads finished!"
echo ""
echo "Total images downloaded: 30"
echo "Location: /Users/nicolasleroo/Desktop/DLM-Website/public/images/"
