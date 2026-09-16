import React from "react";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/footer";
import FadeInWrapper from "../components/FadeInWrapper";
import Header from "../components/Header";
import { Card } from "../components/card";

const parameterSpaceFormUrl =
	"https://docs.google.com/forms/d/e/1FAIpQLSev_swNP-rpYJjsgk8WPhApGEl8HULbtZzVT6OhBD7nIIXl6Q/viewform?usp=header";

const linkClass =
	"text-zinc-300 underline underline-offset-4 hover:text-white";

const labPhotoVersion = "20260909";

const labPhotos = [
	{
		src: `/community/lab/lab1.webp?v=${labPhotoVersion}`,
		alt: "Parameter Space workbenches, electronics, and tools in Duncan Hall 343",
	},
	{
		src: `/community/lab/lab2.webp?v=${labPhotoVersion}`,
		alt: "Parameter Space windows, fume hood, and shared workstations",
	},
	{
		src: `/community/lab/lab3.webp?v=${labPhotoVersion}`,
		alt: "SQE BB84 quantum cryptography kit stored in Parameter Space",
	},
	{
		src: `/community/lab/lab4.webp?v=${labPhotoVersion}`,
		alt: "Soldering and electronics workstation in Parameter Space",
	},
];

export default function WorkPage() {
	return (
		<div className="relative">
			<Head>
				<title>The Lab | SQE Society of Quantum Engineers at SJSU</title>
			</Head>
			<Header />

			<FadeInWrapper>
				<div className="bg-[#181818] px-12">
					<div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-8 lg:pt-12">
						<div className="text-left mb-12">
							<h1 className="text-4xl font-bold text-white mb-2">The Lab</h1>
							<p className="text-zinc-400 text-lg">
								The Parameter Space in Duncan Hall 343 is a lab where SJSU
								Physics and Astronomy students and faculty can build, solder,
								tinker, and explore. It is now available to students. SQE has
								access to the space, including storage — our Thorlabs BB84 kit
								is kept there.
							</p>
							<p className="mt-4 text-zinc-400 text-lg">
								If you are interested in entering, please submit your request
								via this{" "}
								<a
									href={parameterSpaceFormUrl}
									target="_blank"
									rel="noopener noreferrer"
									className={linkClass}
								>
									Google form
								</a>
								. Submitting the form adds you to the Canvas course. After you
								complete the first module, you will receive your access code.
								You must complete each module specific to the equipment you plan
								to use.
							</p>

							<div className="mt-8 grid grid-cols-2 overflow-hidden rounded-lg border border-white/10">
								{labPhotos.map((photo) => (
									<div
										key={photo.src}
										className="relative aspect-square overflow-hidden border-white/10 [&:nth-child(odd)]:border-r [&:nth-child(-n+2)]:border-b"
									>
										<Image
											src={photo.src}
											alt={photo.alt}
											fill
											sizes="(min-width: 1024px) 40vw, 50vw"
											className="object-cover"
										/>
									</div>
								))}
							</div>
						</div>
						<div>
							<div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 md:items-stretch">
								<div className="h-full [&>div]:h-full">
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
											Building Our Hardware Skills
										</h2>
										<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
											We are actively growing SQE's lab capabilities and expanding student-led quantum projects. Our current focus is securing funding, scaling our equipment, and creating more hands-on opportunities for members.
										</p>
										<div className="mt-8">
											<div className="text-xs text-zinc-100">
												<span>LAB SKILLS</span>
											</div>
											<ul className="mt-3 space-y-1 text-zinc-400 leading-8">
												<li>- Free space optics</li>
												<li>- Oscilloscopes</li>
												<li>- Soldering</li>
												<li>- 3D Printing</li>
												<li>- Laser engraving</li>
												<li>- Drill press</li>
											</ul>
										</div>
									</article>
								</Card>
								</div>

								<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 md:mx-0 md:border-t-0">
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
