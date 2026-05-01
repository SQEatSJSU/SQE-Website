import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";
import Head from "next/head";
import Footer from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper";
import Header from "../components/Header";

const redis = Redis.fromEnv();

export const revalidate = 60;

export default async function WorkPage() {
  const views = (
    await redis.mget<number[]>(
      ...allProjects.map((p) => ["pageviews", "projects", p.slug].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[allProjects[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);

  const featured = allProjects.find((project) => project.slug === "scoreboard")!;
  const top2 = allProjects.find((project) => project.slug === "court-check")!;
  const top3 = allProjects.find((project) => project.slug === "nbadraft")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug &&
        project.slug !== top2.slug &&
        project.slug !== top3.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative">
      <Head>
        <title>Our Lab | SQE Society of Quantum Engineers at SJSU</title>
      </Head>
      <Header />

      <FadeInWrapper>
        <div className="bg-[#181818] px-12">
          <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
            <div className="text-left mb-12">
              <h1 className="text-4xl font-bold text-white mb-2">Our Lab</h1>
              <p className="text-zinc-400 text-lg">Our clubroom is located in Duncan Hall, home to our quantum lab.</p>
              <div className="mt-8">
                <div className="text-center">
                  <div className="relative w-full h-96 rounded-lg overflow-hidden border border-zinc-700">
                    <img
                      src="/research/research1.png"
                      alt="SQE quantum cryptography research poster"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">
                    SQE Quantum Cryptography Analogy Demonstration Kit (BB84) research showcase.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                <Card>
                  <article className="relative w-full h-full p-4 md:p-8">
                    <div className="flex items-center justify-between gap-2">
                      <div className="text-xs text-zinc-100">
                        <span>LAB STATUS</span>
                      </div>
                    </div>
                    <h2
                      id="featured-lab"
                      className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                    >
                      Building Our Quantum Lab
                    </h2>
                    <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                      We are actively growing SQE's lab capabilities and expanding student-led quantum projects. Our current focus is securing funding, scaling our equipment, and creating more hands-on opportunities for members.
                    </p>
                  </article>
                </Card>

                <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0">
                  <Card>
                    <article className="relative w-full h-full p-4 md:p-8">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs text-zinc-100">
                          <span>CURRENT EQUIPMENT</span>
                        </div>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                        Thorlabs Quantum Key Distribution Setup
                      </h2>
                      <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                        SQE currently operates a Thorlabs-based quantum cryptography demonstration kit used to explore BB84 quantum key distribution concepts, including polarization-based encoding and eavesdropping detection.
                      </p>
                    </article>
                  </Card>
                  <Card>
                    <article className="relative w-full h-full p-4 md:p-8">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs text-zinc-100">
                          <span>PROJECT GROWTH</span>
                        </div>
                      </div>
                      <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white sm:text-3xl font-display">
                        Research Expansion in Progress
                      </h2>
                      <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                        We are developing new project tracks in quantum communication, quantum software workflows, and educational demonstrations while expanding mentorship and hardware access for student teams.
                      </p>
                    </article>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10"></div>
          <br />
        </div>
      </FadeInWrapper>
	  <div className="w-full h-px bg-zinc-800" />
      <Footer />
    </div>
  );
}
