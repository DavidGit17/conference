import * as React from "react";
import { IconSvgProps } from "@/types";
import logo from "../public/logo.png"
import Image from "next/image";
import Link from "next/link";
export const Logo: React.FC<IconSvgProps> = ({
	size = 36,
	width,
	height,
	...props
}) => (
	<Link href={"/"}><Image alt="logo png" src={logo} width={100} height={100} className="ml-1 md:ml-10 lg:ml-10"/></Link>
);
