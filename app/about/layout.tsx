import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "About | SQE Society of Quantum Engineers at SJSU",
		template: "%s",
	},
	description: "Building the quantum community within SJSU, connecting faculty and students.",
	openGraph: {
		title: "SQE Society of Quantum Engineers at SJSU",
		description:
			"Revolutioning sports success through data science and machine learning.",
		url: "https://sqeatsjsu.org",
		siteName: "https://sqeatsjsu.org",
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

export default function AboutLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen black">
			{children}
		</div>
	);
}
