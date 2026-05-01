"use client";
import { ArrowLeft, Eye, Github, Instagram } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import HeadSEO from "@/app/components/headseo";
type Props = {
	project: {
		
		title: string;
		description: string;
		repository?: string;
		
	};

	views: number;
};
export const Header: React.FC<Props> = ({ project, views }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const leadershipApplyLink = "https://forms.gle/DZDjNmyx7gzBx6xa9";

	const links: { label: string; href: string }[] = [];
	if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/${project.repository}`,
		});
	}

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		
		<header
			ref={ref}
			        className="relative isolate overflow-hidden bg-[#181818]"
		>
			<HeadSEO title="some title or a variable here will work"/>
			<div className="relative z-50 border-b border-[#0055A2]/70 bg-gradient-to-r from-[#002B5C]/45 via-[#003B7A]/35 to-[#002B5C]/45">
				<div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-3 text-zinc-100 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
					<div className="flex flex-col">
						<p className="text-sm font-semibold tracking-wide text-[#FFC72C]">
							Leadership Applications Open Now
						</p>
						<p className="text-xs text-zinc-100/90">
							Apply with your SJSU email. Applications open until Friday May 15th 11:59 PM PST.
						</p>
					</div>
					<Link
						href={leadershipApplyLink}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex w-fit items-center text-xs font-semibold uppercase tracking-wide text-[#FFC72C] underline underline-offset-4 transition hover:text-white"
					>
						APPLY FOR LEADERSHIP HERE
					</Link>
				</div>
			</div>
			<div
				className={`fixed inset-x-0 top-[88px] z-40 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-white/10  border-zinc-200 lg:border-transparent"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex items-center justify-between gap-4">
						<span
							title="View counter for this page"
							className={`duration-200 hover:font-medium flex items-center gap-1 ${
								isIntersecting
									? " text-zinc-400 hover:text-zinc-100"
									: "text-zinc-600 hover:text-zinc-900"
							} `}
						>
							{/*<Eye className="w-6 h-6" />{" "}
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(
								views,
							)}*/}
						</span>
					</div>

					<Link
						href="/projects"
						className={`duration-200 hover:font-medium ${
							isIntersecting
								? " text-zinc-400 hover:text-zinc-100"
								: "text-zinc-600 hover:text-zinc-900"
						} `}
					>
						<ArrowLeft className="w-6 h-6 " />
					</Link>
				</div>
			</div>
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
							{project.title}
						</h1>
						<p className="mt-6 text-lg leading-8 text-zinc-300">
							{project.description}
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link target="_blank" key={link.label} href={link.href}>
									View on {link.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};