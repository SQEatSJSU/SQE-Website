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
		];
	},
};

export default withContentlayer(nextConfig);
