import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { url } from "inspector";
import image from "../public/bg.png"
import mimage from "../styles/logo1.png"


export default function Home() {
	return (
		<>
			<div className="w-full h-fit bg-white ">

				<div className="init">
					<div className="flex flex-col h-full justify-between">
						<div className="flex w-full h-60">
							<div className="h-full w-3/6 flex flex-col justify-center items-center font-inter">



								<pre className="text-black leading-snug text-left text-[25px] inter-custom-bolder">1<sup>st</sup> National Conference on  {"\n"}
									Emerging Trends in Computer Applications {"\n"}
									<span className="text-[#A71E25]">
										(NCETCA - 2024)</span></pre>

							</div>
							<div className="h-full w-3/6 flex flex-col justify-center items-center pl-24 pt-10">
								<Image priority width={360} src={mimage} alt="logo" />
							</div>
						</div>
						<div className=" flex flex-col w-full h-64 justify-evenly items-center ">
							<div className="h-12 w-80 bg-white bg-opacity-50 rounded-lg flex flex-row text-black justify-center items-center font-semibold text-lg px-10">Conference Mode : Hybrid</div>
							<div className="h-24 w-11/12 bg-black flex justify-around">
								<div className="flex flex-col justify-center items-center">
									<p className="font-[700] ">Last Date of Registration & </p>
									<p className="font-[700]">Abstract Submission</p>
									<p className="font-[700]">5th  April, 2024</p>
								</div>

								<div className="flex flex-col justify-center items-center">
									<p className="font-[700]">Full Paper Submission</p>
									<p className="font-[700]">10<sup>th</sup> April 2024</p>
								</div>
								<div className="flex flex-col justify-center items-center">
									<p className="font-[700]">Conference Date</p>
									<p className="font-[700]">27<sup>th</sup> April 2024</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			<div className="w-full h-full px-80 py-36 bg-white">
					<div className="w-full h-full bg-green-300 flex flex-col  items-center">
						<h1 className="text-[#1A2C37] font-semibold text-3xl ">About University</h1>
					</div>
				</div>
		</>
	);
}
