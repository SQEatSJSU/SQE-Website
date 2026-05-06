"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const leadershipApplyLink = "https://forms.gle/DZDjNmyx7gzBx6xa9";

  return (
    <div className="w-screen bg-[#181818] text-xs">
      <div className="border-b border-[#0055A2]/70 bg-gradient-to-r from-[#002B5C]/45 via-[#003B7A]/35 to-[#002B5C]/45">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 text-zinc-100 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <p className="text-sm font-semibold tracking-wide text-[#FFC72C]">
              Leadership Applications Open Now
            </p>
            <p className="text-xs text-zinc-100/90">
              Apply with your SJSU email. Applications open until Friday May 15th 11:59 PM PST.
            </p>
          </div>
          <Link
            href={leadershipApplyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center"
          >
            <motion.span
              className="relative inline-flex text-xs font-semibold uppercase tracking-wide text-[#FFC72C] transition hover:text-white"
              animate={{ opacity: [1, 0.75, 1] }}
              transition={{ duration: 1.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2.2 }}
            >
              APPLY FOR LEADERSHIP HERE
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
          </Link>
        </div>
      </div>
      <div className="navbar bg-[#181818]">
        <div className="navbar navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 stroke-zinc-300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
                          <ul
                tabIndex={0}
                className="z-30 menu menu-md dropdown-content mt-3 p-2 shadow bg-zinc-950 rounded-box w-52 text-zinc-300"
              >
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/community">
                    Community
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/projects">
                    Our Lab
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/papers">
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent"
                    href="/apply"
                  >
                    Join
                  </Link>
                </li>
              </ul>
          </div>
          <Link href="/" className="hover:bg-transparent active:bg-transparent ml-2">
            <Image
              src="/icon.png"
              alt="SQE Society of Quantum Engineers Logo"
              width={100}
              height={50}
              className="hover:grayscale-0"
            />
          </Link>
        </div>
        <div className="navbar-center">
          <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-zinc-200 text-xl">
                <li>
                  <Link href="/" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">About</Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Community</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Our Lab</Link>
                </li>
                <li>
                  <Link href="/papers" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Research</Link>
                </li>

              </ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link 
            href="/apply" 
            className="inline-flex items-center px-5 py-3 mr-2 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
          >
            Join
          </Link>
        </div>
      </div>
    </div>
  );
} 