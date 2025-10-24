"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function PapersPage() {
  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#181818] text-white">
      <Header />
      
      <section className="bg-[#181818] flex flex-col items-center text-center pt-24 pb-20">
        <div className="max-w-4xl mx-auto mb-8">
          <motion.h1
            className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-white pb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Research Papers
          </motion.h1>
          
          <motion.div
            className="mt-12 bg-zinc-800 rounded-lg p-12 border border-zinc-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              We're working on publishing our ongoing research and findings!
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-zinc-600 text-zinc-400 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}

