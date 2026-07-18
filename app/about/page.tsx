"use client";

import React from "react";
import Footer from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import { Laptop, Briefcase, Camera } from "lucide-react";
import Header from "../components/Header";

export default function AboutPage() {
  return (
    <div className="relative bg-[#181818]">
      <Head>
        <title>About | SQE Society of Quantum Engineers at SJSU</title>
      </Head>

      <Header />

      <section className="relative w-screen h-[70vh]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
        <Image src="/community/2025-2026-cycle/unboxing.jpg" alt="SQE Team" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-start justify-center pt-16 sm:pt-20">
          <div className="text-center text-white px-6">
            <motion.h1
              className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay:0.0, duration: 0.8, ease: "easeOut" }}
            >
              <span className="font-bold">Who We Are</span>
            </motion.h1>
          </div>
        </div>
      </section>
      <motion.div
        className="bg-[#181818] pl-4 pr-4 md:pl-10 md:pr-10 pt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="px-2 md:px-6 mx-auto space-y-16 max-w-7xl md:space-y-24 md:pt-6 lg:pt-10">
          <section className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              About
            </h2>
            <p className="mt-8 text-lg text-zinc-300">
              SQE Society of Quantum Engineers is a student-led organization at San José State University dedicated to advancing quantum engineering and building a strong quantum community. We unite passionate students and faculty to explore the frontiers of quantum technology.
            </p>
            <p className="mt-6 text-lg text-zinc-300">
              We are devoted to building the quantum community within SJSU, connecting faculty and students through research collaboration, educational events, and hands-on quantum engineering projects.
            </p>
          </section>

          <section className="relative max-w-7xl mx-auto">

            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-12">
              Our Focus Areas
            </h1>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 border border-white/10 overflow-hidden"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Laptop className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl text-white font-semibold">Research</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                   Students collaborate with faculty on cutting-edge quantum research projects in quantum computing, quantum optics, and quantum algorithms.
                </p>
              </div>

              <div className="px-8 py-16 h-80 border-r border-white/10 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Briefcase className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  We organize workshops, seminars, and hands-on lab sessions to educate students about quantum engineering and its applications.
                </p>
              </div>

              <div className="px-8 py-16 h-80 hover:bg-white/[0.03] transition-colors">
                <div className="mb-6">
                  <Camera className="w-6 h-6 text-white mb-4" />
                  <h3 className="text-xl font-semibold text-white">Community</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  We build connections between students and faculty, creating a supportive environment for quantum engineering education and research.
                </p>
              </div>
            </motion.div>
          </section>

          <section id="founders-story" className="max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Our Founder&apos;s Story
            </h2>
            <p className="mt-3 text-sm text-zinc-500">
              Written by James Saslow
            </p>
            <p className="mt-8 text-lg text-zinc-300">
              The Society of Quantum Engineers (SQE) @ San José State University (SJSU) student organization was founded by Brendan Stork, Zak Espley, Samuel Petruescu, and James Saslow in the year 2023.
            </p>
            <p className="mt-6 text-lg text-zinc-300">
              Zak and Brendan were the first to envision SQE @ SJSU. During their exchange semester at the Colorado School of Mines as NRT Quantum Traineeship fellows, they witnessed the cohesiveness, community, and unity of the SQE @ Mines. They quickly recognized the problem about the quantum community at SJSU — We were scattered. We were a collection of students all involved in different coursework, separate areas of research, and without any medium to connect. Quantum engineering felt lonely. We were interdisciplinary, but not interconnected. We wanted to build both a support system and a professional network for quantum engineers at San José State.
            </p>
          </section>
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
