"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
  membersBySemester,
  ALL_SEMESTERS,
  CURRENT_SEMESTER,
  type Member,
} from "@/data/members";

function LeadershipGrid({ members }: { members: Member[] }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-6 pb-6 content-center"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {members.map((leader, index) => (
        <motion.div
          key={leader.name}
          className="w-48 mb-6 bg-transparent border-gray-700 text-slate-200"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              },
            },
          }}
        >
          <figure>
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full h-48 object-cover"
            />
          </figure>
          <div className="flex mt-3 justify-between items-center">
            <div>
              <h2 className="text-sm font-semibold">{leader.name}</h2>
              <p className="text-xs flex items-center gap-1.5 flex-wrap">
                <span>{leader.role}</span>
                {leader.msqt && (
                  <span className="text-[10px] font-semibold text-white">
                    MSQT
                  </span>
                )}
              </p>
            </div>
            {leader.linkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 transition-colors"
                aria-label={`${leader.name} LinkedIn`}
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 hover:text-zinc-200 transition-colors" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function MembersPage() {
  const [selectedSemester, setSelectedSemester] = useState(CURRENT_SEMESTER);
  const members = membersBySemester[selectedSemester] ?? [];

  return (
    <div className="relative bg-[#181818] min-h-screen">
      <Header />

      <motion.div
        className="bg-[#181818] pl-4 pr-4 md:pl-10 md:pr-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-2 md:px-6 mx-auto max-w-7xl md:pt-6 lg:pt-10">
          <div className="mb-12">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                Members
              </h1>

              <div className="flex gap-2 flex-wrap justify-end">
                {ALL_SEMESTERS.map((semester) => (
                  <button
                    key={semester}
                    onClick={() => setSelectedSemester(semester)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      selectedSemester === semester
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-zinc-400 border-white/20 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {semester}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-zinc-400 text-lg mt-4">
              Passionate students in quantum engineering — connect with us on
              LinkedIn.
            </p>
          </div>

          <LeadershipGrid members={members} />
        </div>

        <br />
        <br />
        <br />
      </motion.div>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
