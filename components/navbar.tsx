import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";

export const Navbar = () => {

	

	return (
		<NextUINavbar  maxWidth="2xl"  position="sticky" style={{backgroundColor : "black"}}  className="h-20">
			<NavbarContent className=" sm:basis-full" >
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1"  href="/">
						<Logo />
					
					</NextLink>
				</NavbarBrand>
				<div className="w-4/5 h-full flex justify-center items-center pl-44 pr-4 ">
				<ul className="hidden lg:flex justify-between w-full gap-5" >
					<li className="text-[15px]  flex flex-col items-center"><Link href="/" className="text-white">Home</Link>  <div className="bg-[#969696] px-5 h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center" ><Link href="/commitee" className="text-white">Commitee </Link>  <div className="bg-[#969696] w-full   h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/call-for-papers" className="text-white">Call for Papers</Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/keynote" className="text-white">KeyNote </Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/submission" className="text-white">Submission </Link> <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/publication" className="text-white">Publication </Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/registration" className="text-white">Registration </Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/venue"  className="text-white">Venue </Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					<li className="text-sm  flex flex-col items-center"><Link href="/contact" className="text-white">Contact </Link>  <div className="bg-[#969696]  w-full h-[0.15625em]"></div></li>
					

				</ul>
				</div>
			</NavbarContent>

			

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">	
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="bg-black">
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} className="">
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
