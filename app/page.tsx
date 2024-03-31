"use client"


import Image from "next/image";
import mimage from "../styles/cropped-logo.png"
import bigimage from "../styles/bg-blue.svg"
import { useEffect, useState } from "react";
import Head from "next/head";


export default function Home() {
	const [imageLoaded, setImageLoaded] = useState<boolean>(false)


	return (
		<>
			<Head>
				<link rel="preload" href="../styles/bg-blue.svg" as="image" />
				<title>NCETCA</title>

			</Head>

			<div className="w-full lg:h-fit bg-white ">


				<div className={imageLoaded == true ? "bg-[url('./bg-blue.svg')]" : "init"}>

					<div className="flex flex-col h-full justify-between">
						<div className="flex w-full lg:h-60 h-28">
							<div className="h-full lg:w-3/6 w-full  flex flex-col justify-center lg:items-center lg:pl-8 pl-4 font-inter">



								<pre className="text-white lg:leading-snug leading-6 text-left lg:text-[25px] lg:pl-7 text-sm font-sans font-black uppercase tracking-widest p-0 lg:inline-block hidden">1st National Conference <span className="font-light">on  {"\n"}
									Emerging Trends in Computer Applications</span> {"\n"}
									<span className="text-[#E8000C] font-sans">
										(NCETCA - 2024)</span></pre>

								<p className="text-white lg:leading-snug leading-6 text-left lg:text-[25px] lg:pl-7 text-sm font-sans font-black uppercase tracking-widest p-0 lg:hidden inline-block">1st National Conference <span className="font-light">on  {"\n"}
									Emerging Trends in Computer Applications</span> <br />
									<span className="text-[#E8000C] font-cmg-sans-medium">
										(NCETCA - 2024)</span></p>

							</div>
							<div className="h-full lg:w-3/6 flex flex-col justify-center items-center lg:pl-48 pt-10">
								<Image priority width={360} src={mimage} alt="logo" className="hidden lg:block scale-85" />
								<Image onLoad={() => { setImageLoaded(true), console.log(imageLoaded) }} onError={() => { setImageLoaded(false) }} src={bigimage} alt="logo" height={1} width={1} className={imageLoaded ? "hidden" : "bg-gray-500 animate-pulse "} />
							</div>
						</div>
						<div className=" flex flex-col w-full lg:h-64 h-48 justify-evenly items-center lg:pt-0 pt-8 lg:gap-0 gap-3 ">
							<div className="lg:h-12 lg:w-80 bg-white  rounded-lg flex flex-row text-black justify-center items-center font-semibold lg:text-lg lg:px-4 text-xs px-3 py-2 uppercase font-sans">Conference Mode :<span className="ml-2  text-[#A71E25] font-sans font-black">  Hybrid</span></div>
							<div className="lg:h-24 h-16 lg:w-11/12 w-full text-white bg-black lg:text-base text-[9px] flex lg:justify-around justify-between items-center lg:px-2 px-2 ">
								<div className="flex flex-col justify-center items-center font-sans uppercase tracking-wider text-center font-[6px] ">
									<p className="font-[400] ">Last Date of Registration & </p>
									<p className="font-[400]">Abstract Submission</p>
									<p className="font-[700] font-black">5th  April, 2024</p>
								</div>

								<div className="flex flex-col justify-center items-center font-sans uppercase text-center font-[6px]">
									<p className="font-[400]">Full Paper Submission</p>
									<p className="font-[700] font-black">10th April 2024</p>
								</div>
								<div className="flex flex-col justify-center items-center font-sans uppercase text-center font-[6px]">
									<p className="font-[400]">Conference Date</p>
									<p className="font-[700] font-black">27th April 2024</p>
								</div>
							</div>
						</div>
					</div>
				</div>


			</div>

			<div className="w-full h-fit lg:px-80 lg:py-36 py-16 bg-white">
				<div className="w-full h-fit flex flex-col  items-center">
					<h1 className="text-[#1A2C37] font-semibold lg:text-3xl leading-6 text-xl ">About University</h1>
					<p className="open-sans-regular lg:mt-16 text-black lg:text-[22px] lg:leading-10 leading-7 text-justify text-lg flex flex-row justify-start scale-90">
						KLEF Deemed to be university was established in 1980-81, as KL College of {"\n"} Engineering, which was upgraded to KL College of Engineering Autonomous in {"\n"} 2006 by UGC, and was declared as a Deemed to be University in 2009 by UGC,{"\n"} MHRD Govt.of India. In 2012 as a Deemed to be University the institution was {"\n"} accredited by NAAC with A Grade and later in 2018, was re-accredited by NAAC {"\n"} with A++ grade. In 2019 UGC, MHRD declared this intuition as Category I {"\n"} Institution. The institutes remains indebted to leadership of our late co-founder{"\n"} Er. Koneru Lakshmaiah, and our Founder Er. Koneru Satyanarayana, both of whose {"\n"} vision has helped in creating this abode of learning, which has emerged as one of {"\n"} the elite institutes of the nation.
					</p>

					<h1 className="text-[#1A2C37] font-semibold lg:text-3xl text-xl leading-6 lg:mt-32 mt-14">About Department</h1>
					<p className="open-sans-regular lg:mt-16 mt-3 text-black lg:text-[22px] lg:leading-10 leading-7 text-lg text-justify flex flex-row justify-start scale-90">
						Department of Computer Science and Applications was established in the Academic Year 2015. BCA at KLEF(Deemed to be University) University is an undergraduate program with the specializations &quot;Cloud Technology and Information Security&quot;, &quot;Artificial Intelligence&quot;, &quot;Cyber Security&quot; and &quot;Data Science&quot;. These programs are designed with the main objective of imparting strong theoretical and practical foundation, and to provide exposure to latest technologies to bridge the industry gap in IT sector by abiding to social ethics.
					</p>

					<h1 className="text-[#1A2C37] font-semibold lg:text-3xl text-xl leading-6 lg:mt-32 mt-14 ">About Conference</h1>
					<p className="open-sans-regular lg:mt-16 mt-3 text-black lg:text-[22px] lg:leading-10 leading-7 text-lg text-justify flex flex-row justify-start scale-90">
						The &quot;Emerging Trends in Computer Applications&quot; conference aims to give practitioners, academics, industry experts, and researchers a forum to examine and talk about the most recent developments, A, and emerging trends in the field of computer applications. To promote the development and use of cutting-edge technologies across a range of computer application disciplines, the conference seeks to foster networking, collaboration, and knowledge sharing among attendees. The conference intends to foster a greater knowledge of emerging technologies, approaches, and their potential influence on society, industry, and academia through keynote speeches, paper presentations, panel discussions, and interactive sessions. The conference aspires to stimulate innovative thinking, advance interdisciplinary research, and influence the direction of computer applications by bringing together specialists from many fields.
					</p>
				</div>
			</div>


		</>
	);
}
