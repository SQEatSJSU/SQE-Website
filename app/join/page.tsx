"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
	mailingListSignupUrl,
	paymentConfirmationFormUrl,
	sammyAppSignupUrl,
	semesterDuesAmount,
	squarePaymentUrl,
} from "@/data/joinLinks";

const discordUrl = "https://discord.gg/j5x7jWx3sa";
const instagramUrl = "https://www.instagram.com/sqeatsjsu/";

const linkClass =
	"text-zinc-300 underline underline-offset-4 hover:text-white";

const membershipBenefits = [
	"Lifetime membership in the society for connections",
	"Access to club hardware, including the Thorlabs BB84 quantum cryptography kit",
	"Website photo and LinkedIn presence",
	"Support the club — dues help fund hardware, events, and trips",
	"Talks, workshops, and trips with researchers and industry",
];

export default function JoinUsPage() {
	return (
		<div className="relative min-h-screen flex flex-col bg-[#181818] text-white overflow-hidden">
			<Head>
				<title>Join SQE | Society of Quantum Engineers at SJSU</title>
			</Head>
			<Header />

			<main className="relative flex-grow flex flex-col">
				<div className="w-full flex items-center justify-center px-6 md:px-12 pt-8">
					<motion.h1
						className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						Become a Member of SQE
					</motion.h1>
				</div>

				<motion.div
					className="relative mt-8 grid w-full grid-cols-[2fr_3fr] aspect-[5/2] overflow-hidden border-y border-white/10"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
				>
					<div className="relative h-full overflow-hidden bg-[#1856a5]">
						<Image
							src="/community/blochlogo.png"
							alt="SQE Bloch Logo"
							fill
							priority
							sizes="40vw"
							className="object-contain"
						/>
					</div>
					<div className="relative h-full overflow-hidden">
						<Image
							src="/community/2026-2027-cycle/firstmeeting.webp"
							alt="SQE members at the first general meeting of the 2026–2027 cycle"
							fill
							priority
							sizes="60vw"
							className="object-cover object-[center_42%]"
						/>
					</div>
				</motion.div>

				<div className="w-full flex items-center justify-center px-6 md:px-12 py-8 pb-16">
					<div className="w-full max-w-2xl">
						<motion.section
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
						>
							<h2 className="text-2xl sm:text-3xl font-semibold text-white">
								Membership Benefits
							</h2>
							<ul className="mt-6 space-y-3 text-zinc-400">
								{membershipBenefits.map((benefit) => (
									<li key={benefit} className="flex gap-3 text-sm sm:text-base">
										<span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
										<span>{benefit}</span>
									</li>
								))}
							</ul>
						</motion.section>

						<motion.section
							className="mt-12"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
						>
							<h2 className="text-2xl sm:text-3xl font-semibold text-white">
								Steps to Officially Join
							</h2>
							<ol className="mt-6 space-y-5 text-sm sm:text-base text-zinc-400">
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">1.</span>
									<span>
										Click{" "}
										<a
											href={squarePaymentUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											this link
										</a>{" "}
										to pay your {semesterDuesAmount} semester dues.
									</span>
								</li>
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">2.</span>
									<span>
										Take a screenshot of the payment and submit it to the{" "}
										<a
											href={paymentConfirmationFormUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											confirmation form
										</a>
										.
									</span>
								</li>
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">3.</span>
									<span>
										Request to join on the{" "}
										<a
											href={sammyAppSignupUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											Sammy App
										</a>
										.
									</span>
								</li>
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">4.</span>
									<span>
										Join the{" "}
										<a
											href={mailingListSignupUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											Mailing List
										</a>
										,{" "}
										<a
											href={discordUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											Discord
										</a>{" "}
										(verify in chat to get access to all channels), or follow the{" "}
										<a
											href={instagramUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											Instagram
										</a>
										. Announcements for meetings will be shared through these
										channels.
									</span>
								</li>
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">5.</span>
									<span>
										To get involved in a project, check out{" "}
										<a href="/research" className={linkClass}>
											Research
										</a>{" "}
										and the Discord project channels for more info. To join, feel
										free to send a message to the specific channel.
									</span>
								</li>
								<li className="flex gap-4">
									<span className="shrink-0 text-white font-semibold">6.</span>
									<span>
										To appear on{" "}
										<a href="/members" className={linkClass}>
											Members
										</a>, send your LinkedIn profile and/or a photo. DM the
										president on{" "}
										<a
											href={discordUrl}
											target="_blank"
											rel="noopener noreferrer"
											className={linkClass}
										>
											Discord
										</a>{" "}
										or email{" "}
										<a
											href="mailto:sjsu.quantum@gmail.com"
											className={linkClass}
										>
											sjsu.quantum@gmail.com
										</a>.
									</span>
								</li>
							</ol>
						</motion.section>
					</div>
				</div>
			</main>

			<div className="w-full h-px bg-zinc-800/70" />
			<Footer />
		</div>
	);
}
