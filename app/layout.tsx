import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";


export const metadata: Metadata = {
	title: {
		default: "SQE Society of Quantum Engineers at SJSU",
		template: "%s",
	},
	description: "Building the quantum community within SJSU, connecting faculty and students.",
	openGraph: {
		title: "SQE Society of Quantum Engineers",
		description:
			"Building the quantum community within SJSU, connecting faculty and students.",
		url: "sqe-sjsu.com",
		siteName: "sqe-sjsu.com",
		images: [
			{
				url: "/favicon.png",
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
		icon: [
			{ url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
		],
		shortcut: "/favicon/favicon.ico",
		apple: "/favicon/apple-touch-icon.png",
		other: [
			{
				rel: "icon",
				url: "/favicon/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				rel: "icon",
				url: "/favicon/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},
};
const inter = Inter({
	subsets: ["latin"],
	display: 'swap',
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../public/fonts/Poppins-Medium.ttf",
	variable: "--font-calsans",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={[inter.variable, calSans.variable].join(" ")}>

			<head>
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<Analytics />
			</head>
			<body
				className={`bg-[#181818] font-calsans ${
					process.env.NODE_ENV === "development" ? "debug-screens" : undefined
				}`}
			>
				{children}
				
				
			</body>

				
			
		</html>
	);
}
