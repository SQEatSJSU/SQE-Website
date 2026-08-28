"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
	paymentConfirmationFormUrl,
	sammyAppSignupUrl,
	semesterDuesAmount,
	squarePaymentUrl,
} from "@/data/joinLinks";

export default function JoinUsPage() {
	return (
		<div className="relative min-h-screen flex flex-col bg-[#181818] text-white overflow-hidden">
			<Head>
				<title>Join SQE | Society of Quantum Engineers at SJSU</title>
				<style>{`
          @media (min-width: 640px) {
            .image-container-wrapper {
              border-radius: 0.5rem;
            }
            .image-container-wrapper > * {
              border-radius: inherit;
            }
          }
        `}</style>
			</Head>
			<Header />

			<main className="relative flex-grow flex flex-col">
				<div className="relative w-full h-64 overflow-hidden image-container-wrapper">
					<div className="absolute inset-0 overflow-hidden">
						<Image
							src="/community/blochlogo.png"
							alt="SQE Bloch Logo"
							fill
							priority
							className="object-contain"
						/>
					</div>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#181818] z-10"></div>
					<div className="absolute inset-0 bg-gradient-to-t from-[#181818]/30 via-transparent to-[#181818]/30 z-10"></div>
					<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#181818] to-transparent z-20"></div>
				</div>

				<div className="w-full flex items-center justify-center px-6 md:px-12 py-8">
					<div className="max-w-lg text-center">
						<motion.h1
							className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, ease: "easeOut" }}
						>
							Become a Member of SQE
						</motion.h1>

						<motion.div
							className="mt-10 flex flex-col items-center gap-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						>
							<div className="rounded-xl bg-white p-3 shadow-2xl shadow-black/30">
								<QRCodeSVG
									value={squarePaymentUrl}
									size={180}
									level="H"
									marginSize={1}
									bgColor="#ffffff"
									fgColor="#181818"
									title="Square payment QR code"
								/>
							</div>
							<p className="text-sm text-zinc-400">
								Scan or click{" "}
								<a
									href={squarePaymentUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-300 underline underline-offset-4 hover:text-white"
								>
									this link
								</a>{" "}
								to pay your {semesterDuesAmount} semester dues.
							</p>

							<p className="text-sm text-zinc-400">
								Take a screenshot of the payment and submit it to the{" "}
								<a
									href={paymentConfirmationFormUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-300 underline underline-offset-4 hover:text-white"
								>
									confirmation form
								</a>
								, and{" "}
								<a
									href={sammyAppSignupUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-300 underline underline-offset-4 hover:text-white"
								>
									request to join on the Sammy App
								</a>
								. Join the{" "}
								<a
									href="https://discord.gg/j5x7jWx3sa"
									target="_blank"
									rel="noopener noreferrer"
									className="text-zinc-300 underline underline-offset-4 hover:text-white"
								>
									Discord
								</a>{" "}
								if you haven&apos;t already.
							</p>

							<p className="text-sm text-zinc-400">
								To be added to the website,{" "}
								<a
									href="/members"
									className="text-zinc-300 underline underline-offset-4 hover:text-white"
								>
									message leadership
								</a>{" "}
								to request to schedule a photo.
							</p>
						</motion.div>
					</div>
				</div>
			</main>

			<div className="w-full h-px bg-zinc-800/70" />
			<Footer />
		</div>
	);
}
