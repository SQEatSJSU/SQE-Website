"use client";

import React from "react";
import Footer from "../components/footer";
import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from "../components/Header";

const events = [
  {
    id: 1,
    image: "/community/alextalk.png",
    title: "First SQE Talk of the Year\n“Searching for Dark Matter Axions with Quantum Sensors”\nDr. Alex Droster, Stanford University"
  }
];

export default function CommunityPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="relative">
      <Head>
        <title>Community | Aggie Sports Analytics at UC Davis</title>
      </Head>
      
      <Header />

      <motion.div
        className="bg-[#181818] pl-10 pr-10 pt-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="bg-[#181818]">
          <div className="px-6 mx-auto max-w-7xl lg:px-8 md:pt-4 lg:pt-6">
            
            <div className="text-left mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Community</h1>
              <p className="text-zinc-400 text-lg">Events from our 2025-2026 cycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border border-white/10 overflow-hidden">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  className="px-16 py-20 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  animate="visible"
                  transition={{ 
                    delay: (index % 2) * 0.1,
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <div className="w-full h-80 overflow-hidden mb-4 mx-auto">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-white text-lg font-medium text-left whitespace-pre-line">
                    {event.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <br></br>
      <br></br>
      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
