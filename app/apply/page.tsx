"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function JoinUsPage() {

  return (
    <div className="relative min-h-screen flex flex-col bg-[#181818] text-white overflow-hidden">
      <Head>
        <title>Join ASA | Aggie Sports Analytics</title>
      </Head>
      <Header />
      
      <main className="relative flex-grow flex">
        <div className="relative w-1/2 min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#181818] z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/30 via-transparent to-[#181818]/30 z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
          
          <Image
            src="/community/blochlogo.png"
            alt="SQE Bloch Logo"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="w-1/2 flex items-center justify-center px-12">
          <div className="max-w-lg">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Become a Member SQE
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-zinc-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Connect with fellow students, attend talks, and engage in cutting-edge quantum research opportunities.
            </motion.p>
            
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <a
                href="https://discord.gg/j5x7jWx3sa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-transparent border border-zinc-600 text-zinc-300 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-white transition-colors"
              >
                Join Now
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      
      <div className="w-full h-px bg-zinc-800/70" />
      <Footer />
    </div>
  );
}