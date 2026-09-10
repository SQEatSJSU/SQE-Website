import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	async redirects() {
		return [
			{
				source: "/apply",
				destination: "/join",
				permanent: true,
			},
			{
				source: "/papers",
				destination: "/research",
				permanent: true,
			},
			{
				source: "/projects",
				destination: "/lab",
				permanent: true,
			},
			{
				source: "/projects/:slug",
				destination: "/lab/:slug",
				permanent: true,
			},
		];
	},
};

export default withContentlayer(nextConfig);
