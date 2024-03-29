"use client"
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/link";


import { siteConfig } from "@/config/site";
import NextLink from "next/link";


import { Logo } from "@/components/icons";
import { usePathname } from "next/navigation";
export const Navbar = () => {
	const router = useRouter()
	const pathname = usePathname()
	const LinkStyle = 
	{hoverStyle : "text-white  inline-block relative cursor-pointer transition-all duration-500 before:content-[''] before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[0.15625em] before:transition-all before:duration-500 before:bg-[#969696] hover:before:w-full hover:text-white md:text-sm lg:text-medium	",
	defaultStyle : "underline underline-offset-8 decoration-[#969696] text-white decoration-2 md:text-sm lg:text-medium "}
	console.log(pathname)

	return (
		<NextUINavbar maxWidth="2xl" position="sticky" style={{ backgroundColor: "black" }} className="h-20">
			<NavbarContent className=" sm:basis-full" >
				
						<Logo />

				
				<div className="lg:w-4/5 h-full flex justify-end items-center lg:pl-44 pr-4 md:pl-2 md:w-full ">
					<ul className="hidden lg:flex justify-between w-full gap-5 md:flex md:text-xs " >
						<li className="text-[15px]  flex flex-col items-center "><Link href="/" className={pathname == "/" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Home</Link>  </li>
						<li className="text-sm  flex flex-col items-center" ><Link href="/commitee" className={pathname == "/commitee" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Commitee </Link>  </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/call-for-papers" className={pathname == "/call-for-papers" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Call for Papers</Link> </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/keynote" className={pathname == "/keynote" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>KeyNote </Link> </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/submission" className={pathname == "/submission" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Submission </Link></li>
						<li className="text-sm  flex flex-col items-center"><Link href="/publication" className={pathname == "/publication" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Publication </Link> </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/registration" className={pathname == "/registration" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Registration </Link> </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/venue" className={pathname == "/venue" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Venue </Link> </li>
						<li className="text-sm  flex flex-col items-center"><Link href="/contact" className={pathname == "/contact" ? LinkStyle.defaultStyle : LinkStyle.hoverStyle}>Contact </Link> </li>
						{/* <div className="bg-[#969696]  w-full h-[0.15625em]"></div> */}

					</ul>
				</div>
			</NavbarContent>



			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle className="flex md:flex text-white "  />
			</NavbarContent>

			<NavbarMenu  className="bg-black">
				<div className="mx-4 mt-2 flex flex-col gap-6">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}  className="flex justify-center items-center ">
							<div className="flex justify-center items-center w-full h-fit mitta">
							<NavbarMenuToggle onClick={()=>{router.push(item.href)}} className=" py-2 text-white "  icon={item.label}></NavbarMenuToggle>
							</div>
							
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
