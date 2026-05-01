"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
            Research
          </motion.h1>
          
          <motion.div
            className="mt-12 bg-zinc-800 rounded-lg p-8 sm:p-12 border border-zinc-700 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              Quantum Cryptography Analogy Demonstration Kit
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8">
              This project explores a hands-on way to understand BB84 quantum key
              distribution through an analog optical setup. The kit demonstrates
              how polarization states can encode information and how eavesdropping
              attempts can be detected, helping students connect core quantum
              communication concepts to a tangible experiment.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-10">
              <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="relative overflow-hidden rounded-md border border-zinc-700">
                  <Image
                    src="/research/research1.png"
                    alt="Quantum Cryptography research poster"
                    width={1200}
                    height={750}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-zinc-400">
                  Research poster overview for the Quantum Cryptography Analogy Demonstration Kit.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="relative overflow-hidden rounded-md border border-zinc-700">
                  <Image
                    src="/research/kit.png"
                    alt="Quantum Cryptography demonstration kit setup"
                    width={1200}
                    height={750}
                    className="h-auto w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm text-zinc-400">
                  Experimental setup used to model sender, receiver, and eavesdropper interactions.
                </p>
              </div>
            </div>
            
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

