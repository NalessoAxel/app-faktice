/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['localhost:1337', 'res.cloudinary.com'],
	},
};

module.exports = nextConfig;
