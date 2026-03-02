/**
 * Blog Typography Configuration
 * Professional standardized typography system for all blog posts
 * Based on 2026 industry standards and WCAG 2.1 Level AA compliance
 *
 * Research Sources:
 * - Learn UI Design: Font Size Guidelines for Responsive Websites
 * - Smashing Magazine: Modern Fluid Typography Using CSS Clamp
 * - WCAG Accessibility Guidelines
 * - Google Material Design Standards
 *
 * Last Updated: January 23, 2026
 */

export const BLOG_TYPOGRAPHY = {
  /**
   * HERO SECTION TYPOGRAPHY
   * Used at the top of each blog post
   */
  hero: {
    /**
     * Main H1 Title
     * Mobile: 42px → Tablet: 52px → Desktop: 72px
     * Line height: 1.1 for strong visual impact
     */
    h1: "font-heading text-[2.625rem] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-6",

    /**
     * Hero Subtitle/Excerpt
     * Mobile: 20px → Tablet: 22px → Desktop: 26px
     * Line height: 1.5 (relaxed) for readability
     */
    subtitle: "text-[1.25rem] sm:text-[1.375rem] md:text-[1.5rem] lg:text-[1.625rem] text-gray-300 font-body mb-8 leading-relaxed",

    /**
     * Metadata Container (date, author, read time)
     * 14px on all screens - appropriate for secondary information
     */
    metadata: "flex flex-wrap items-center gap-4 text-gray-400 font-body text-sm mb-8",

    /**
     * Category Badge
     * Small uppercase text with tracking
     */
    categoryBadge: "text-[#5FA99F] font-semibold text-sm tracking-[0.15em] uppercase mb-4",

    /**
     * Back to Blog Link
     */
    backLink: "inline-flex items-center gap-2 text-[#5FA99F] hover:text-[#85C7B3] transition-colors mb-8 font-body"
  },

  /**
   * ARTICLE CONTENT TYPOGRAPHY
   * Main body content and section headers
   */
  article: {
    /**
     * Body Paragraphs
     * 18px on all screens (optimal for long-form reading)
     * Line height: 1.75 (28px) - research-backed for reduced eye strain
     */
    body: "text-gray-300 font-body text-lg leading-relaxed mb-6",

    /**
     * H2 Section Headers
     * Mobile: 30px → Tablet: 34px → Desktop: 40px
     * Responsive scaling for proper hierarchy
     */
    h2: "font-heading text-[1.875rem] sm:text-[2.125rem] md:text-[2.25rem] lg:text-[2.5rem] font-bold text-white mt-12 mb-6",

    /**
     * H3 Subheadings
     * Mobile: 22px → Tablet: 24px → Desktop: 28px
     */
    h3: "font-heading text-[1.375rem] sm:text-[1.5rem] md:text-[1.625rem] lg:text-[1.75rem] font-semibold text-white mt-8 mb-4",

    /**
     * H4 Minor Headings (if needed)
     * Mobile: 18px → Desktop: 20px
     */
    h4: "font-heading text-[1.125rem] sm:text-[1.25rem] font-semibold text-white mt-6 mb-3",

    /**
     * Links within body text
     */
    link: "text-[#5FA99F] hover:text-[#85C7B3] underline transition-colors",

    /**
     * Unordered Lists
     */
    ul: "list-disc list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2",

    /**
     * Ordered Lists
     */
    ol: "list-decimal list-inside text-gray-300 font-body text-lg leading-relaxed mb-8 space-y-2",

    /**
     * Block Quotes
     */
    blockquote: "bg-[#1A1A1A]/60 backdrop-blur-xl border-l-4 border-[#5FA99F] p-6 rounded-r-lg mb-6",
    blockquoteText: "text-gray-300 font-body text-base leading-relaxed italic mb-3"
  },

  /**
   * COMPONENT TYPOGRAPHY
   * Callout boxes, alerts, special content blocks
   */
  components: {
    /**
     * Callout/Alert Box Container
     */
    callout: "bg-[#1A1A1A]/60 backdrop-blur-xl border border-[#5FA99F]/30 rounded-lg p-6 mb-6",

    /**
     * Callout Title
     */
    calloutTitle: "font-heading text-lg font-bold text-white mb-3",

    /**
     * Callout Body Text
     */
    calloutText: "text-gray-300 font-body text-base leading-relaxed",

    /**
     * Warning/Alert Callout (red border)
     */
    warningCallout: "bg-[#1a1a1a] border border-[#ff6b6b]/30 rounded-lg p-6 mb-8",
    warningTitle: "text-[#ff6b6b] font-semibold mb-2",
    warningText: "text-gray-300 font-body leading-relaxed mb-0",

    /**
     * Info Callout (teal border)
     */
    infoCallout: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 mb-8",
    infoText: "text-gray-300 font-body leading-relaxed mb-0"
  },

  /**
   * TABLE TYPOGRAPHY
   * For data tables and comparison charts
   */
  table: {
    container: "overflow-x-auto mb-8",
    table: "w-full border-collapse bg-[#1A1A1A]/60 backdrop-blur-xl rounded-lg overflow-hidden",
    thead: "bg-[#5FA99F]/20",
    th: "px-6 py-3 text-left text-sm font-semibold text-white",
    td: "px-6 py-4 text-gray-300 font-body text-base",
    divider: "divide-y divide-[#5FA99F]/20"
  },

  /**
   * CATEGORY TAGS & BADGES
   */
  badges: {
    categoryTag: "px-3 py-1 bg-[#5FA99F]/20 text-[#5FA99F] rounded-full text-sm hover:bg-[#5FA99F]/30 transition-colors",
    categoryTagLarge: "inline-block mb-3 px-3 py-1 text-xs font-heading font-semibold tracking-wider uppercase bg-[rgba(95,169,159,0.15)] text-[#5FA99F] rounded-lg hover:bg-[rgba(95,169,159,0.25)] transition-colors border border-[rgba(95,169,159,0.3)]"
  }
} as const;

/**
 * FONT SIZE REFERENCE (for documentation)
 *
 * Mobile (320px - 639px):
 * - H1: 42px (2.625rem)
 * - Subtitle: 20px (1.25rem)
 * - H2: 30px (1.875rem)
 * - H3: 22px (1.375rem)
 * - Body: 18px (1.125rem / text-lg)
 * - Metadata: 14px (0.875rem / text-sm)
 *
 * Tablet (640px - 767px):
 * - H1: 52px (3.25rem)
 * - Subtitle: 22px (1.375rem)
 * - H2: 34px (2.125rem)
 * - H3: 24px (1.5rem)
 * - Body: 18px
 * - Metadata: 14px
 *
 * Desktop (1024px+):
 * - H1: 72px (4.5rem)
 * - Subtitle: 26px (1.625rem)
 * - H2: 40px (2.5rem)
 * - H3: 28px (1.75rem)
 * - Body: 18px
 * - Metadata: 14px
 *
 * LINE HEIGHTS:
 * - H1: 1.1 (tight, for impact)
 * - H2/H3: 1.2-1.3 (snug)
 * - Body: 1.75 (relaxed, optimal for reading)
 * - Metadata: 1.5
 *
 * WCAG COMPLIANCE:
 * - All text scales to 200% without breaking layout
 * - Contrast ratios: 4.5:1 for body, 3:1 for large text
 * - Line spacing: 1.5x minimum (body text uses 1.75x)
 */

/**
 * USAGE EXAMPLE:
 *
 * import { BLOG_TYPOGRAPHY } from '@/lib/blog-typography-config';
 *
 * <h1 className={BLOG_TYPOGRAPHY.hero.h1}>
 *   Your Blog Post Title
 * </h1>
 *
 * <p className={BLOG_TYPOGRAPHY.article.body}>
 *   Your article content here...
 * </p>
 */
