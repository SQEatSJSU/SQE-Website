"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Header from "../components/Header";
import { eventsByCycle, ALL_CYCLES, DEFAULT_CYCLE } from "@/data/events";

export default function CommunityPage() {
  const [activeCycle, setActiveCycle] = useState(DEFAULT_CYCLE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  // Jump to hash on load (e.g. /community#2025-2026)
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && ALL_CYCLES.includes(hash)) {
      setActiveCycle(hash);
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Highlight the pill for the cycle section currently in view
  useEffect(() => {
    const sections = ALL_CYCLES.map((cycle) =>
      document.getElementById(cycle),
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveCycle(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Community | SQE Society of Quantum Engineers at SJSU</title>
      </Head>

      <Header />

      <motion.div
        className="bg-[#181818] pl-10 pr-10 pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-[#181818]">
          <div className="px-6 mx-auto max-w-7xl lg:px-8 md:pt-4 lg:pt-6">
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h1 className="text-4xl font-bold text-white">Community</h1>

                {/* Cycle jump links */}
                <div className="flex gap-2 flex-wrap justify-end">
                  {ALL_CYCLES.map((cycle) => (
                    <a
                      key={cycle}
                      href={`#${cycle}`}
                      onClick={() => setActiveCycle(cycle)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                        activeCycle === cycle
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-zinc-400 border-white/20 hover:border-white/50 hover:text-white"
                      }`}
                    >
                      {cycle}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {ALL_CYCLES.map((cycle) => {
              const events = eventsByCycle[cycle] ?? [];

              return (
                <section
                  key={cycle}
                  id={cycle}
                  className="scroll-mt-28 mb-10 last:mb-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs font-medium tracking-[0.2em] text-zinc-500 shrink-0">
                      {cycle}
                    </span>
                    <div className="h-px flex-1 bg-white/10" aria-hidden="true" />
                  </div>

                  {events.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 overflow-hidden">
                      {events.map((event, index) => (
                        <motion.div
                          key={event.id}
                          className="px-16 py-20 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.3 }}
                          animate="visible"
                          transition={{
                            delay: (index % 2) * 0.1,
                            duration: 0.6,
                            ease: "easeOut",
                          }}
                        >
                          <div className="w-full h-80 overflow-hidden mb-4 mx-auto">
                            <img
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <p className="text-zinc-500 text-sm mb-1">
                            {event.date}
                          </p>
                          <h3 className="text-white text-lg font-medium text-left">
                            {event.title}
                          </h3>
                          <p className="text-zinc-400 text-sm mt-1">
                            {event.speaker}
                          </p>
                          <p className="text-zinc-500 text-sm mt-2">
                            {event.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="border border-white/10 py-24 text-center">
                      <p className="text-zinc-500 text-lg">
                        No events yet for this cycle. Stay tuned!
                      </p>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>
      </motion.div>
      <br />
      <br />
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
