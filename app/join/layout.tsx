import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Join | SQE Society of Quantum Engineers at SJSU",
		template: "%s",
	},
	description: "Join the Society of Quantum Engineers at SJSU.",
	openGraph: {
		title: "SQE Society of Quantum Engineers at SJSU",
		description: "Join the Society of Quantum Engineers at SJSU.",
		url: "https://sqeatsjsu.org/join",
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

export default function AboutLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen black">
			{children}
		</div>
	);
}
