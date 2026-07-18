// ============================================================
// SITE TOP BANNER — switch active banner when seasons change
// ============================================================
//
// HOW TO CHANGE THE BANNER:
//   1. Set ACTIVE_BANNER_ID to one of the ids below (or null to hide).
//   2. Optionally set SHOW_HOMEPAGE_HERO_CTA from the same banner config.
//
// HOW TO AUTO-CYCLE MULTIPLE BANNERS:
//   1. Set AUTO_ROTATE_BANNERS = true
//   2. List banner ids in ROTATING_BANNER_IDS (in display order)
//
// ============================================================

export type SiteBanner = {
  id: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  /** Pulsing text + center-out underline on the CTA (leadership style) */
  animateCta?: boolean;
  /** Show a matching CTA button on the home page hero */
  showOnHomepage?: boolean;
  homepageCtaClassName?: string;
};

export const SITE_BANNERS: Record<string, SiteBanner> = {
  "summer-break-discord": {
    id: "summer-break-discord",
    title: "Summer Break",
    subtitle: "Get involved this Fall semester!",
    ctaLabel: "Join Discord",
    ctaHref: "https://discord.gg/j5x7jWx3sa",
    ctaExternal: true,
    showOnHomepage: true,
    homepageCtaClassName:
      "inline-flex items-center px-4 py-2 bg-[#FFC72C] text-[#181818] text-sm font-semibold rounded-full hover:bg-[#E6B326] transition-colors duration-300",
  },
  "leadership-applications": {
    id: "leadership-applications",
    title: "Leadership Applications Open Now",
    subtitle:
      "Apply with your SJSU email. Applications open until Friday May 15th 11:59 PM PST.",
    ctaLabel: "APPLY FOR LEADERSHIP HERE",
    ctaHref: "https://forms.gle/DZDjNmyx7gzBx6xa9",
    ctaExternal: true,
    animateCta: true,
    showOnHomepage: true,
    homepageCtaClassName:
      "inline-flex items-center px-4 py-2 bg-[#FFC72C] text-[#181818] text-sm font-semibold rounded-full hover:bg-[#E6B326] transition-colors duration-300",
  },
};

/** Set to null to hide the top banner entirely */
export const ACTIVE_BANNER_ID: string | null = "summer-break-discord";

/** Auto-cycle through these banners (only when AUTO_ROTATE_BANNERS is true) */
export const AUTO_ROTATE_BANNERS = false;
export const ROTATING_BANNER_IDS: string[] = [
  "summer-break-discord",
  "leadership-applications",
];
export const BANNER_ROTATE_INTERVAL_MS = 10_000;

export function getBannerById(id: string): SiteBanner | undefined {
  return SITE_BANNERS[id];
}

export function getActiveBanner(): SiteBanner | null {
  if (!ACTIVE_BANNER_ID) return null;
  return SITE_BANNERS[ACTIVE_BANNER_ID] ?? null;
}

export function getHomepageHeroCta(): SiteBanner | null {
  const banner = getActiveBanner();
  if (!banner?.showOnHomepage) return null;
  return banner;
}
