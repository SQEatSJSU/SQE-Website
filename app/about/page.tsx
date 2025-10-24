"use client";

import React from "react";
import Footer from "../components/footer";
import Head from "next/head";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Laptop, Briefcase, Camera, Linkedin } from "lucide-react";
import Header from "../components/Header";
import { MEMBERS, type Member } from "../../data/members";

// Using shared members data from data/members.ts

function LeadershipGrid() {
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
      {MEMBERS.map((leader, index) => (
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
                delay: index * 0.1 
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
              <p className="text-xs">{leader.role}</p>
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

export default function AboutPage() {
  return (
    <div className="relative bg-[#181818]">
      <Head>
        <title>About | SQE Society of Quantum Engineers at SJSU</title>
      </Head>

      <Header />

      <section className="relative w-screen h-[70vh]">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
        <Image src="/community/group.png" alt="SQE Team" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
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
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <div className="lg:w-1/2 lg:pr-6">
              <br />
              <p className="mt-8 text-lg text-zinc-300">
                SQE Society of Quantum Engineers is a student-led organization at San José State University dedicated to advancing quantum engineering and building a strong quantum community. We unite passionate students and faculty to explore the frontiers of quantum technology.
              </p>
              <br />
              <p className="mb-8 text-lg text-zinc-300">
                We are devoted to building the quantum community within SJSU, connecting faculty and students through research collaboration, educational events, and hands-on quantum engineering projects.</p>
            </div>
            <div className="lg:w-1/2 lg:pl-6 flex justify-center lg:justify-end">
              <figure className="border border-white/20 rounded-lg overflow-hidden"><Image src="/community/blochlogo.png" width={400} height={240} alt="SQE Bloch Logo"/></figure>
            </div>
          </div>
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

          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-4xl pb-12">
              Members
            </h1>

            <LeadershipGrid />
          </div>
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
