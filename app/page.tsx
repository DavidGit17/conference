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
			<div className="w-full h-fit px-80 py-36 bg-white">
				<div className="w-full h-fit flex flex-col  items-center">
					<h1 className="text-[#1A2C37] font-semibold text-3xl leading-6  ">About University</h1>
					<p className="open-sans-regular mt-16 text-black text-[22px] text-justify flex flex-row justify-start scale-90">
						KLEF Deemed to be university was established in 1980-81, as KL College of {"\n"} Engineering, which was upgraded to KL College of Engineering Autonomous in {"\n"} 2006 by UGC, and was declared as a Deemed to be University in 2009 by UGC,{"\n"} MHRD Govt.of India. In 2012 as a Deemed to be University the institution was {"\n"} accredited by NAAC with A Grade and later in 2018, was re-accredited by NAAC {"\n"} with A++ grade. In 2019 UGC, MHRD declared this intuition as Category I {"\n"} Institution. The institutes remains indebted to leadership of our late co-founder{"\n"} Er. Koneru Lakshmaiah, and our Founder Er. Koneru Satyanarayana, both of whose {"\n"} vision has helped in creating this abode of learning, which has emerged as one of {"\n"} the elite institutes of the nation.
					</p>

					<h1 className="text-[#1A2C37] font-semibold text-3xl leading-6 mt-32">About Department</h1>
					<p className="open-sans-regular mt-16 text-black text-[22px] text-justify flex flex-row justify-start scale-90">
						Department of Computer Science and Applications was established in the Academic Year 2015. BCA at KLEF(Deemed to be University) University is an undergraduate program with the specializations "Cloud Technology and Information Security", "Artificial Intelligence, "Cyber Security" and "Data Science". These programs are designed with the main objective of imparting strong theoretical and practical foundation, and to provide exposure to latest technologies to bridge the industry gap in IT sector by abiding to social ethics.
					</p>

					<h1 className="text-[#1A2C37] font-semibold text-3xl leading-6 mt-32  ">About Conference</h1>
					<p className="open-sans-regular mt-16 text-black text-[22px] text-justify flex flex-row justify-start scale-90">
					The "Emerging Trends in Computer Applications" conference aims to give practitioners, academics, industry experts, and researchers a forum to examine and talk about the most recent developments, A, and emerging trends in the field of computer applications. To promote the development and use of cutting-edge technologies across a range of computer application disciplines, the conference seeks to foster networking, collaboration, and knowledge sharing among attendees. The conference intends to foster a greater knowledge of emerging technologies, approaches, and their potential influence on society, industry, and academia through keynote speeches, paper presentations, panel discussions, and interactive sessions. The conference aspires to stimulate innovative thinking, advance interdisciplinary research, and influence the direction of computer applications by bringing together specialists from many fields.
					</p>
				</div>
			</div>
		</>
	);
}
