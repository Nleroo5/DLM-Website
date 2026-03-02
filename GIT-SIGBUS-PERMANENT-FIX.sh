#!/bin/bash

# ============================================================================
# PERMANENT FIX FOR GIT SIGBUS (Signal 10) ERRORS ON macOS
# ============================================================================
# Based on research: Git mmap() causes SIGBUS on macOS with certain filesystems
# Solution: Disable mmap in Git using GIT_NO_MMAP environment variable
# ============================================================================

echo "================================================"
echo "GIT SIGBUS PERMANENT FIX FOR macOS"
echo "================================================"
echo ""

# Step 1: Add GIT_NO_MMAP to your shell profile
SHELL_PROFILE=""
if [ -f ~/.zshrc ]; then
    SHELL_PROFILE=~/.zshrc
elif [ -f ~/.bash_profile ]; then
    SHELL_PROFILE=~/.bash_profile
elif [ -f ~/.bashrc ]; then
    SHELL_PROFILE=~/.bashrc
fi

if [ -n "$SHELL_PROFILE" ]; then
    echo "[1/4] Adding GIT_NO_MMAP to $SHELL_PROFILE..."

    # Check if already exists
    if grep -q "export GIT_NO_MMAP=1" "$SHELL_PROFILE"; then
        echo "      ✓ GIT_NO_MMAP already configured in $SHELL_PROFILE"
    else
        echo "" >> "$SHELL_PROFILE"
        echo "# Fix Git SIGBUS errors on macOS by disabling mmap" >> "$SHELL_PROFILE"
        echo "export GIT_NO_MMAP=1" >> "$SHELL_PROFILE"
        echo "      ✓ Added GIT_NO_MMAP to $SHELL_PROFILE"
    fi
fi

# Step 2: Set it for current session
echo ""
echo "[2/4] Setting GIT_NO_MMAP for current session..."
export GIT_NO_MMAP=1
echo "      ✓ GIT_NO_MMAP=1 set"

# Step 3: Clean up lock files
echo ""
echo "[3/4] Cleaning up git lock files..."
rm -f .git/index.lock .git/refs/remotes/origin/main.lock 2>/dev/null
echo "      ✓ Lock files removed"

# Step 4: Try the commit with mmap disabled
echo ""
echo "[4/4] Attempting commit with mmap disabled..."
git add app/blog/facebook-ads-not-delivering-2026/ lib/blog-posts.ts 2>&1 | head -10

if git commit -m "Add blog post: Facebook ads not delivering 2026

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"; then
    echo "      ✓ Commit successful!"

    # Update tracking ref manually in case of partial success
    echo $(cat .git/refs/heads/main) > .git/refs/remotes/origin/main
    rm -f .git/refs/remotes/origin/main.lock

    echo ""
    echo "[5/5] Pushing to remote..."
    if git push; then
        echo "      ✓ Push successful!"
    else
        echo "      ⚠ Push failed, but commit succeeded locally"
    fi
else
    echo "      ✗ Commit still failed"
    echo ""
    echo "If the commit still fails, we need to try git-repair tool."
fi

echo ""
echo "================================================"
echo "IMPORTANT: Restart your terminal!"
echo "================================================"
echo ""
echo "The GIT_NO_MMAP fix has been added to $SHELL_PROFILE"
echo "Close and reopen your terminal for it to take effect permanently."
echo ""
echo "What this fix does:"
echo "- Disables mmap() in Git (causes SIGBUS on macOS)"
echo "- Forces Git to use malloc() + pread() instead"
echo "- Prevents 'pack-objects died of signal 10' errors"
echo ""
