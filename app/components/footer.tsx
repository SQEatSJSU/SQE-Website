"use client";

import Link from "next/link";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-300">
      <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side with branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left md:w-1/3">
          <a className="inline-block mb-4">
            <img src="/icon.png" className="hover:grayscale-0" alt="SQE Society of Quantum Engineers Logo" width={80} />
          </a>
          <h2 className="text-xl font-bold mb-2">SQE Society of Quantum Engineers</h2>
          <p className="mb-4">Building the quantum community within SJSU, connecting faculty and students</p>
        </div>

        {/* Right side with links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:w-1/3 md:justify-end">
          <div>
            <h2 className="text-lg font-bold mb-4">Contact</h2>
            <a 
              href="mailto:team@sqe-sjsu.com" 
              className="flex items-center hover:text-gray-100 transition-colors duration-200"
            >
              <span>Email</span>
            </a>
          </div>
          
          <div>
            <h2 className="text-lg font-bold mb-4">Connect</h2>
            <nav className="flex flex-col gap-2">
              <a 
                href="https://www.instagram.com/sqeatsjsu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start hover:text-gray-100 transition-colors duration-200"
              >
                <span className="">Instagram</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/sqe-sjsu/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start hover:text-gray-100 transition-colors duration-200"
              >
                <span className="">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/SQE-SJSU" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center md:justify-start hover:text-gray-100 transition-colors duration-200"
              >
                <span className="">GitHub</span>
              </a>
            </nav>
          </div>
          
          <div>
            <h2 className="text-lg font-bold mb-4">Navigate</h2>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="transition-colors duration-200 hover:text-gray-100">
                About
              </Link>
              <Link href="/community" className="transition-colors duration-200 hover:text-gray-100">
                Community
              </Link>
              <Link href="/projects" className="transition-colors duration-200 hover:text-gray-100">
                Our Lab
              </Link>
              <Link href="/papers" className="transition-colors duration-200 hover:text-gray-100">
                Papers
              </Link>

              <Link href="/apply" className="transition-colors duration-200 hover:text-gray-100">
                Join
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </footer>
  );
}
