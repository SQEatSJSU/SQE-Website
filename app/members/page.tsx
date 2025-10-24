"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";

const TEAM_MEMBERS = [
  {
    name: "Justin Oliver",
    photo: "/members/justin.jpg",
    linkedin: "https://www.linkedin.com/in/justin-oliver-123456789/"
  },
  {
    name: "Abhishek Roy", 
    photo: "/members/roy.jpeg",
    linkedin: "https://www.linkedin.com/in/abhishek-roy-123456789/"
  },
  {
    name: "Raj Bhandari",
    photo: "/members/raj.jpeg", 
    linkedin: "https://www.linkedin.com/in/raj-bhandari-629b764/"
  },
  {
    name: "Charity Wei",
    photo: "/members/charity.jpg",
    linkedin: "https://www.linkedin.com/in/charity-wei-123456789/"
  },
  {
    name: "Ella Zeng",
    photo: "/members/ella.jpeg",
    linkedin: "https://www.linkedin.com/in/ella-zeng-817952332/"
  },
  {
    name: "Vaishnavi Rao",
    photo: "/members/vishnavi.jpg", 
    linkedin: "https://www.linkedin.com/in/vaishnavi-rao-123456789/"
  },
  {
    name: "Kaveesh Passari",
    photo: "/members/kaveesh.jpeg",
    linkedin: "https://www.linkedin.com/in/kaveesh-passari-393556200/"
  },
  {
    name: "Nicholas Padilla",
    photo: "/members/nic.png",
    linkedin: "https://www.linkedin.com/in/nicholas-padilla-123456789/"
  },
  {
    name: "Alondra Torres",
    photo: "/members/alondra.jpeg",
    linkedin: "https://www.linkedin.com/in/alondra-torres-123456789/"
  },
  {
    name: "Francisco Correia",
    photo: "/members/francisco.jpeg", // You'll need to add this photo
    linkedin: "https://www.linkedin.com/in/francisco-correia-123456789/"
  },
  {
    name: "Stephen Reagin",
    photo: "/members/stephen.jpeg",
    linkedin: "https://www.linkedin.com/in/stephen-reagin-123456789/"
  },
  {
    name: "Imran",
    photo: "/members/imran.jpg",
    linkedin: "https://www.linkedin.com/in/imran-123456789/"
  }
];

export default function MembersPage() {
  return (
    <div className="w-screen min-h-screen overflow-hidden bg-[#181818] text-white">
      <Header />
      
      <section className="bg-[#181818] px-6 pt-20 pb-6">
        <div className="mx-auto max-w-6xl text-center">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Team
          </motion.h1>
          <motion.p
            className="text-lg text-zinc-400 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Meet the passionate students and researchers driving quantum engineering at SJSU
          </motion.p>
        </div>
      </section>

      <section className="bg-[#181818] px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                  {member.name}
                </h3>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
