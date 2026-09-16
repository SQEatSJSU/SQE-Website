"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/footer";

const projects = [
  {
    id: "quantum-cryptography-kit",
    track: "ALL levels",
    title: "Hardware",
    summary:
      "A hands-on optical setup for BB84 quantum key distribution, showing how polarization encodes information and how eavesdropping is detected.",
  },
  {
    id: "beginner-software",
    track: "Beginner",
    title: "Beginner Software Projects",
    summary:
      "Tutorials and small coding projects that introduce superposition, measurement, entanglement, and simple algorithms on simulators and real quantum hardware.",
  },
  {
    id: "ai-qec",
    track: "Advanced",
    title: "Advanced AI in QEC",
    summary:
      "A compact Transformer-based decoder for surface-code quantum error correction, trained on simulated syndromes and tested on hardware data.",
  },
];

export default function ResearchPage() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden bg-[#181818] text-white">
      <Header />

      <section className="bg-[#181818] pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h1
            className="font-display tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight font-extrabold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Research
          </motion.h1>

          {/* Project overview — visible as soon as the page opens */}
          <motion.div
            className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-lg border border-zinc-700 bg-zinc-800 p-6 transition-colors hover:border-zinc-500"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {project.track}
                </span>
                <h2 className="mt-3 text-lg font-semibold text-white">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm text-zinc-400">{project.summary}</p>
                <a
                  href={`#${project.id}`}
                  className="mt-auto pt-6 inline-flex items-center self-start text-sm font-medium text-zinc-300 hover:text-white"
                >
                  Read more
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </div>
            ))}
          </motion.div>

          <motion.section
            id="quantum-cryptography-kit"
            className="scroll-mt-24 mt-16 bg-zinc-800 rounded-lg p-8 sm:p-12 border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              ALL levels
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white mb-4">
              Hardware
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg mb-8">
              This project explores a hands-on way to understand BB84 quantum key
              distribution through an analog optical setup — the Quantum
              Cryptography Analogy Demonstration Kit. The kit demonstrates how
              polarization states can encode information and how eavesdropping
              attempts can be detected, helping students connect core quantum
              communication concepts to a tangible experiment.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4">
                <div className="relative overflow-hidden rounded-md border border-zinc-700">
                  <Image
                    src="/research/research1.jpg"
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
                    src="/research/kit.jpg"
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
          </motion.section>

          <motion.section
            id="beginner-software"
            className="scroll-mt-24 mt-8 bg-zinc-800 rounded-lg p-8 sm:p-12 border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Beginner
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white mb-4">
              Beginner Software Projects
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg">
              This track is for members who are new to the field and want a
              starting foundation of quantum information. We will work through
              beginner Quantum tutorials and small coding projects that introduce
              the beginning concepts taught in every quantum information course:
              superposition, measurement, entanglement, and simple algorithms.
              This will be done on both quantum computing simulators and real
              quantum hardware.
            </p>
          </motion.section>

          <motion.section
            id="ai-qec"
            className="scroll-mt-24 mt-8 bg-zinc-800 rounded-lg p-8 sm:p-12 border border-zinc-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Advanced
            </span>
            <h2 className="mt-3 text-2xl font-semibold text-white mb-4">
              Advanced AI in QEC
            </h2>

            <div className="rounded-lg border border-zinc-700 bg-zinc-900/50 p-4 mb-8">
              <div className="relative overflow-hidden rounded-md border border-zinc-700">
                <Image
                  src="/research/aierror.webp"
                  alt="Surface-code syndrome data and a neural decoder beside superconducting quantum hardware"
                  width={1600}
                  height={891}
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                An AI generated image of our future software working alongside
                superconducting hardware.
              </p>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg">
              Quantum computers are highly sensitive to noise and physical
              errors. Quantum error correction reduces the impact of these
              errors by extracting syndrome information and using a decoder to
              estimate the most likely error without directly measuring the
              encoded quantum state. This project proposes the development of a
              compact Transformer-based decoder for surface-code quantum error
              correction. The work extends an existing distance-3
              repetition-code study into a surface-code environment using Stim.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg mt-4">
              The system will simulate repeated stabilizer measurements,
              generate syndrome and detection-event sequences, introduce
              controlled noise, and evaluate the decoder against conventional
              approaches such as lookup tables and minimum-weight perfect
              matching. The project will first train the model using
              approximately 1–5 million simulated syndrome sequences covering
              gate, measurement, single-qubit, depolarizing, and correlated
              noise. The model will then be tested and fine-tuned using publicly
              available quantum-hardware data to study the gap between simulated
              and real-device noise.
            </p>
            <p className="text-zinc-400 text-base sm:text-lg mt-4">
              Performance will be evaluated using logical error rate, prediction
              accuracy, inference latency, model size, robustness, and
              generalization to noise conditions not used during training. The
              long-term goal is to determine whether a specialized AI decoder
              can complement traditional QEC methods and scale from distance-3
              codes to larger distance-5 and distance-7 surface codes.
            </p>
          </motion.section>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-transparent border border-zinc-600 text-zinc-400 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
