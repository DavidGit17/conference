import { title } from "@/components/primitives";
import Link from "next/link";
import "../../styles/globals.css"

export default function Submission() {
	return (
		<div  className="pt-16 pb-16 px-11 h-fit bg-white">
		<h1 className="flex flex-row justify-center items-center text-black text-[22px] inter-custom-bold">SUBMISSION</h1>
			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-14 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">PAPER <span className="text-[#A71E25]">TEMPLATE</span></h1>
				<p className="inter capitalize text-black mt-3 text-[15px]">PLEASE DOWNLOAD THE FOLLOWING PAPER TEMPLATE FOR YOUR MANUSCRIPT .</p>
				<ol className="text-black list-decimal inter-custom-semibold text-sm leading-9 underline underline-offset-4 ml-4 pt-4">
						<li ><Link href={"https://icetcs.bmsce.in/Paper_templates/conference-template-a4.docx"}>MICROSOFT WORD TEMPLATE (A4)</Link></li>
						<li><Link href={"https://icetcs.bmsce.in/Paper_templates/conference-latex-template.zip"}>LATEX TEMPLATE (A4) AND LATEX BIBLIOGRAPHY</Link></li>
					</ol>	
			</div>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-16 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] drop-shadow-2xl shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">PAPER TEMPLATE <span className="text-[rgb(167,30,37)]">SPECIFICATIONS</span></h1>
				<pre className="font-open-sans text-black text-lg mt-5 text-justify leading-10">Use our template to meet formatting requirements. Your paper must comply with the following specifications{"\n"}</pre>
				<ol className="list-decimal text-black leading-9 text-lg ml-5 pt-4 inter">
					<li>Paper Length: Maximum 6 Pages</li>
					<li>You can follow the following configuration for your paper template margin:</li>
					<ol className="list-disc ml-7 leading-7">
						<li>Minimum left and right margins: 1.57 cm</li>
						<li>Minimum top margin for first page: 0.95 cm</li>
						<li>Minimum top margin for other pages: 1.9 cm</li>
						<li>Minimum bottom margin: 2.54 cm</li>
					</ol>
					<li>File Format: Adobe PDF (.pdf)</li>
					<li>Allowed File Size: 2.0 MB</li>
					<li>Do not include page numbers in your paper</li>
					<li>Do not apply security settings to your PDF file.</li>
				</ol>
			</div>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-14 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">PAPER SUBMISSION <span className="text-[#A71E25]">LINK</span></h1>
				<p className="inter uppercase text-black mt-3 text-[15px] ">Active researchers are requested to submit their original research papers</p>
				<p className="text-black inter-custom-bolder mt-12 text-xl"><span className="text-[#A71E25]">Email : </span> <Link href={"mailto:ncetca@kluniversity.in"}>ncetca@kluniversity.in</Link></p>
			</div>

			<div className="w-full h-fit flex flex-row  bg-[#D9D9D99E] mt-16 p-8 flex flex-col rounded rounded-3xl border-b-3 border-[#c4c4c4] drop-shadow-2xl shadow-black">
				<h1 className="text-black inter-custom-bolder text-xl">FINAL SUBMISSION <span className="text-[rgb(167,30,37)]">PROCEDURE</span></h1>
				
				<ol className="list-decimal text-black leading-9 text-lg ml-5 pt-4 inter">
					<li><pre className="font-open-sans text-black text-lg mt-5 text-justify leading-8">Pay for conference registration here:<b className="inter-custom-bolder"> NCETCA - National Conference on Emerging Trends in Computer Applications</b> {"\n"} Registration link: <b className="underline  underline-offset-4 cursor-pointer inter-custom-bolder">Click Here</b></pre></li>
					<li>Final camera ready paper is required, even if you do not intend to make any changes to your original submission.</li>
					<li>Before you proceed, carefully read the Author Information page (in the website) to ensure that your submission meets the guidelines.</li>
					<li>Prepare a copy of your paper in PDF format using our templates</li>
					<ol className="list-disc ml-7 leading-9">
						<li><b className="inter-custom-bolder capitalize">mandatory: </b>Make sure your PDF file meets IEEE Xplore compliance by following the instructions on the PDF Express page.</li>
						<li><pre className=" text-black inter text-justify leading-7">Log in using the same username and password you created during your initial submission. You may then edit your submission {"\n"}information (paper title, author list, etc) and/or resubmit your paper.</pre></li>
						<li>Do not apply security settings to your PDF file.</li>
						<li><pre className=" text-black inter text-justify leading-7"><b className="inter-custom-bolder capitalize">mandatory: </b> You must pay for conference registration before you will be allowed to upload yourfinal camera {"\n"}ready paper. You will need your registration code in order to proceed.</pre></li>
					</ol>
					
				</ol>
			</div>

		</div>
	);
}
