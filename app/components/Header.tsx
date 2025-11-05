"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isApplyPage = pathname === "/apply";

  return (
    <div className="w-screen bg-[#181818] text-xs">
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
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/projects">
                    Our Lab
                  </Link>
                </li>
                <li>
                  <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/papers">
                    Papers
                  </Link>
                </li>
                {!isApplyPage && (
                  <li>
                    <Link className="text-lg hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent" href="/apply">
                      Join
                    </Link>
                  </li>
                )}
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
                  <Link href="/about" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">About</Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Community</Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Our Lab</Link>
                </li>
                <li>
                  <Link href="/papers" className="hover:text-zinc-100 transition-colors duration-200 hover:bg-transparent active:bg-transparent">Papers</Link>
                </li>

              </ul>
          </div>
        </div>
        <div className="navbar-end">
          {!isApplyPage && (
            <Link 
              href="/apply" 
              className="inline-flex items-center px-5 py-3 mr-2 bg-transparent border border-white text-white text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
            >
              Join
            </Link>
          )}
        </div>
      </div>
    </div>
  );
} 