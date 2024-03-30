import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
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
		
	],
	icons: {
		icon: "/logo.png",
		shortcut: "/logo.png",
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
