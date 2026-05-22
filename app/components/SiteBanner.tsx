"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  type SiteBanner,
  ACTIVE_BANNER_ID,
  AUTO_ROTATE_BANNERS,
  ROTATING_BANNER_IDS,
  BANNER_ROTATE_INTERVAL_MS,
  getBannerById,
} from "@/data/siteBanners";

function BannerCta({ banner }: { banner: SiteBanner }) {
  const linkClass = "inline-flex w-fit items-center";

  const label = banner.animateCta ? (
    <motion.span
      className="relative inline-flex text-xs font-semibold uppercase tracking-wide text-[#FFC72C] transition hover:text-white"
      animate={{ opacity: [1, 0.75, 1] }}
      transition={{
        duration: 1.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2.2,
      }}
    >
      {banner.ctaLabel}
      <motion.span
        aria-hidden
        className="absolute left-0 -bottom-1 h-px w-full origin-center bg-current"
        animate={{ scaleX: [0, 1, 1, 0] }}
        transition={{
          duration: 1.9,
          ease: "easeInOut",
          times: [0, 0.35, 0.75, 1],
          repeat: Infinity,
          repeatDelay: 1.9,
        }}
      />
    </motion.span>
  ) : (
    <span className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#181818] bg-[#FFC72C] rounded-full hover:bg-[#E6B326] transition-colors duration-300">
      {banner.ctaLabel}
    </span>
  );

  if (banner.ctaExternal) {
    return (
      <a
        href={banner.ctaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {label}
      </a>
    );
  }

  return (
    <Link href={banner.ctaHref} className={linkClass}>
      {label}
    </Link>
  );
}

function resolveInitialBannerId(): string | null {
  if (AUTO_ROTATE_BANNERS && ROTATING_BANNER_IDS.length > 0) {
    const first = ROTATING_BANNER_IDS.find((id) => getBannerById(id));
    return first ?? ACTIVE_BANNER_ID;
  }
  return ACTIVE_BANNER_ID;
}

export default function SiteBannerBar() {
  const [bannerId, setBannerId] = useState<string | null>(resolveInitialBannerId);

  useEffect(() => {
    if (!AUTO_ROTATE_BANNERS || ROTATING_BANNER_IDS.length < 2) {
      setBannerId(ACTIVE_BANNER_ID);
      return;
    }

    const ids = ROTATING_BANNER_IDS.filter((id) => getBannerById(id));
    if (ids.length < 2) {
      setBannerId(ids[0] ?? ACTIVE_BANNER_ID);
      return;
    }

    let index = 0;
    setBannerId(ids[0]);

    const interval = window.setInterval(() => {
      index = (index + 1) % ids.length;
      setBannerId(ids[index]);
    }, BANNER_ROTATE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  const banner = bannerId ? getBannerById(bannerId) : null;
  if (!banner) return null;

  return (
    <div className="border-b border-[#0055A2]/70 bg-gradient-to-r from-[#002B5C]/45 via-[#003B7A]/35 to-[#002B5C]/45">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 text-zinc-100 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <p className="text-sm font-semibold tracking-wide text-[#FFC72C]">
            {banner.title}
          </p>
          <p className="text-xs text-zinc-100/90">{banner.subtitle}</p>
        </div>
        <BannerCta banner={banner} />
      </div>
    </div>
  );
}
