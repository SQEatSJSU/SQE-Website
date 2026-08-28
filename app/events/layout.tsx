import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Events | SQE Society of Quantum Engineers at SJSU",
		template: "%s | SQE Society of Quantum Engineers at SJSU",
	},
	description: "Upcoming events from the Society of Quantum Engineers at SJSU.",
	openGraph: {
		title: "SQE Society of Quantum Engineers at SJSU",
		description: "Upcoming events from the Society of Quantum Engineers at SJSU.",
		url: "https://sqeatsjsu.org/events",
		siteName: "SQE at SJSU",
		images: [
			{
				url: "https://sqeatsjsu.org/favicon.png",
				width: 512,
				height: 512,
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


export default function EventsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-bl  from-zinc-950 from-20% via-indigo-950 via-30% to-zinc-950 to-50%">
			{children}
		</div>
	);
}
