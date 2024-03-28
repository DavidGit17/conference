import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({
	weight: ["400", "500", "600", "700", "800", "900"],
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head >
				
				
				
			</head>
			<body
				className={clsx(
					"min-h-screen bg-background   antialiased",
					inter.className
				)}
			>
		
				<Providers >
					<div className="relative flex flex-col h-fit">
						<Navbar />
						<main className="h-fit w-full">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
