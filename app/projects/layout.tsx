import { Metadata } from "next";
import type { Project } from "@/.contentlayer/generated";


export const metadata: Metadata = {
	title: {
		default: "Our Lab | SQE Society of Quantum Engineers",
		template: "%s",
	},
	description: "Building the quantum community within SJSU through research collaboration and education.",
	openGraph: {
		title: "SQE Society of Quantum Engineers",
		description:
			"Building the quantum community within SJSU through research collaboration and education.",
		url: "sqe-sjsu.com",
		siteName: "sqe-sjsu.com",
		images: [
			{
				url: "/whiteLogo.jpg",
				width: 1920,
				height: 1080,
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "SQE_SJSU",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon/favicon.ico",
	},
};



export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (

		<div className="relative min-h-screen black">

			{children}
		</div>
	);
}
